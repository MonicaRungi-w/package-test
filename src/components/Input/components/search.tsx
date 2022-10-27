import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../../../assets/svg-components/search-icon";

export interface SearchProps {
  placeholder: string;
  value: string;
  searchValues: { id: string; label: string }[];
  onChange: (t: string) => void;
  fullWidth?: boolean;
  icon: string;
}

const Search = ({
  placeholder,
  value,
  searchValues,
  onChange,
  fullWidth = false,
  icon,
  ...props
}: SearchProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [searchValuesArray, setSearchValuesArray] = useState(searchValues);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [emptyState, setEmptyState] = useState("");

  const toggleSearch = (value: string) => {
    setIsSearching(true);
    if (value.length !== 0) {
      setIsOpen(true);
      const newArray = searchValues.filter(
        (v) => v.label.includes(value) || v.id.includes(value)
      );
      setSearchValuesArray(newArray);
      if (newArray.length === 0) {
        setEmptyState("La ricerca non ha prodotto risultati.");
      } else {
        setEmptyState("");
      }
    } else {
      setIsOpen(false);
      setEmptyState("");
    }
    onChange(value);
  };

  useEffect(() => {
    if (value && !isSearching) {
      setTimeout(() => setSearchValuesArray(searchValues), 300);
    }
  }, [value]);

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      if (searchValuesArray.length === 0) {
        onChange("");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className={["search-wrapper", fullWidth && "fullWidth"].join(" ")}
      ref={wrapperRef}
    >
      <div
        className={["search-header", fullWidth ? "fullWidth" : ""].join(" ")}
      >
        <input
          type={"text"}
          className="text-field"
          placeholder={placeholder}
          {...props}
          value={value}
          onChange={(e) => toggleSearch(e.target.value)}
        />
        <div className="">
          {icon ? (
            <img src={icon} className="icon-img" />
          ) : (
            <SearchIcon className="icon-img" fill="#2b468a" />
          )}
        </div>
      </div>
      {isSearching && (
        <div
          className={[
            "search-list",
            isOpen ? "search-list-show" : "search-list-hide",
          ].join(" ")}
        >
          {searchValuesArray.map((value, idx) => (
            <div key={idx} className="search-list-item">
              {value.label}
            </div>
          ))}
          {emptyState && (
            <div className="search-list-item search-empty-state">
              {emptyState}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
