import React, { useEffect, useRef, useState } from "react";

import "./Select.css";
import "../common.css";
import AngleUp from "../../assets/svg-components/angle-up";
import { Checkbox } from "..";
import XIcon from "../../assets/svg-components/x-icon";

export interface SelectProps {
  placeholder: string;
  selectedValue?: { id: string; label: string };
  values: { id: string; label: string }[];
  onChange?: (sel: { id: string; label: string }) => void;
  onChangeList?: (sel: { id: string; label: string }[]) => void;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "multi" | "single";
}

const Select = ({
  placeholder,
  selectedValue,
  values,
  onChange,
  onChangeList,
  fullWidth = false,
  disabled = false,
  type,
  ...props
}: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selected, setSelected] =
    useState<{ id: string; label: string } | undefined>();
  const [selectedList, setSelectedList] =
    useState<{ id: string; label: string }[] | undefined>();
  const [valuesArray, setValuesArray] =
    useState<{ id: string; label: string }[]>(values);
  const [emptyState, setEmptyState] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [formattedList, setFormattedList] = useState("");

  useEffect(() => {
    if (selectedValue) {
      setSelected(selectedValue);
    }
  }, [selectedValue]);

  useEffect(() => {
    if (selected && onChange) {
      onChange(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (selectedList && onChangeList) {
      onChangeList(selectedList);
    }
  }, [selectedList]);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const selectItem = (item: { id: string; label: string }) => {
    setSelected(item);
  };

  const selectListItem = (item: { id: string; label: string }) => {
    let list = selectedList ? selectedList : [];
    const duplicate = list.filter((l) => l.id === item.id);
    if (duplicate.length > 0) {
      list = list.filter((l) => l.id !== item.id);
    } else {
      list.push(item);
    }
    setSelectedList(list);

    const listFormatted = list?.map((l) => l.label).join(", ");
    setFormattedList(listFormatted);
  };

  const search = (value: { id: string; label: string }) => {
    setIsSearching(true);
    if (value.label.length !== 0) {
      const newArray = values.filter(
        (v) => v.label.includes(value.label) || v.id.includes(value.id)
      );
      setValuesArray(newArray);
      if (newArray.length === 0) {
        setEmptyState("La ricerca non ha prodotto risultati.");
      } else {
        setEmptyState("");
      }
    } else {
      setValuesArray(values);
      setEmptyState("");
    }
    setSelected(value);
  };

  useEffect(() => {
    if (selected && !isSearching) {
      setTimeout(() => setValuesArray(values), 300);
    }
  }, [selected]);

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsListOpen(false);
      if (valuesArray.length === 0) {
        setSelected(undefined);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const checkSelectedItems = (value: { id: string; label: string }) => {
    if (selectedList?.find((l) => l.id === value.id)) {
      return true;
    } else return false;
  };

  return (
    <div
      className={["dd-wrapper", fullWidth && "fullWidth"].join(" ")}
      ref={wrapperRef}
    >
      <div
        className={`dd-header ${disabled ? "dd-header-disabled" : ""}`}
        onClick={() => !disabled && toggleList()}
      >
        <div
          className={[
            "dd-header-title",
            selected ? "dd-header-title-selected" : "",
          ].join(" ")}
        >
          <input
            value={
              type === "multi" ? formattedList : selected ? selected.label : ""
            }
            placeholder={placeholder}
            className="text-field"
            onChange={(e) =>
              search({ id: e.target.value, label: e.target.value })
            }
            disabled={disabled}
          />
        </div>
        {type === "multi" && formattedList && (
          <XIcon
            className={"x-icon-multi-select"}
            onClick={() => {
              setFormattedList("");
              setSelectedList([]);
            }}
          />
        )}
        <AngleUp
          className={["angle", isListOpen ? "angle-down" : "angle-up"].join(
            " "
          )}
          fill="#2b468a"
        />
      </div>
      <div
        className={[
          "dd-list",
          isListOpen ? "dd-list-show" : "dd-list-hide",
        ].join(" ")}
      >
        {valuesArray.map((value, idx) =>
          type === "multi" ? (
            <div className="dd-list-item">
              <Checkbox
                label={value.label}
                setChecked={() => selectListItem(value)}
                checked={checkSelectedItems(value)}
              />
            </div>
          ) : (
            <div
              key={idx}
              className="dd-list-item"
              onClick={() => {
                selectItem(value);
                toggleList();
              }}
            >
              {value.label}
            </div>
          )
        )}
        {emptyState && (
          <div className="dd-list-item dd-empty-state">{emptyState}</div>
        )}
      </div>
    </div>
  );
};

export default Select;
