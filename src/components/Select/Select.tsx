import React, { useEffect, useRef, useState } from "react";

import "./Select.css";
import "../common.css";
import { AngleUp } from "../../assets";

export interface SelectProps {
  placeholder: string;
  selectedValue: { id: string; label: string };
  values: { id: string; label: string }[];
  onChange: (t: string) => void;
  fullWidth?: boolean;
}

const Select = ({
  placeholder,
  selectedValue,
  values,
  onChange,
  fullWidth = false,
  ...props
}: SelectProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selected, setSelected] =
    useState<{ id: string; label: string } | undefined>(selectedValue);
  const [valuesArray, setValuesArray] =
    useState<{ id: string; label: string }[]>(values);
  const [emptyState, setEmptyState] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const selectItem = (item: { id: string; label: string }) => {
    setSelected(item);
  };

  const search = (value: { id: string; label: string }) => {
    if (value.label.length !== 0) {
      setIsSearching(true);
      const newArray = values.filter(
        (v) => v.label.includes(value.label) || v.id.includes(value.id)
      );
      setValuesArray(newArray);
      if (newArray.length === 0) {
        setEmptyState("La ricerca non ha prodotto risultati.");
      }
    } else {
      setIsSearching(false);
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

  return (
    <div className="dd-wrapper" ref={wrapperRef}>
      <div className="dd-header" onClick={() => toggleList()}>
        <div
          className={[
            "dd-header-title",
            selected ? "dd-header-title-selected" : "",
          ].join(" ")}
        >
          <input
            value={selected ? selected.label : ""}
            placeholder={placeholder}
            className="text-field"
            onChange={(e) =>
              search({ id: e.target.value, label: e.target.value })
            }
          />
        </div>
        <img
          src={AngleUp}
          className={["angle", isListOpen ? "angle-down" : "angle-up"].join(
            " "
          )}
        />
      </div>
      <div
        className={[
          "dd-list",
          isListOpen ? "dd-list-show" : "dd-list-hide",
        ].join(" ")}
      >
        {valuesArray.map((value) => (
          <div
            className="dd-list-item"
            onClick={() => {
              selectItem(value);
              toggleList();
            }}
          >
            {value.label}
          </div>
        ))}
        {emptyState && (
          <div className="dd-list-item dd-empty-state">{emptyState}</div>
        )}
      </div>
    </div>
  );
};

export default Select;
