import React, { ChangeEvent, ReactNode } from "react";
import Check from "../../../assets/svg-components/check";

export interface TextProps {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  isValid?: boolean;
}

const Text = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
  disabled = false,
  isValid,
  ...props
}: TextProps) => {
  return (
    <div
      className={[
        "text-field-container",
        fullWidth ? "full-width" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <input
        type={"text"}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <div className="valid-image-container">
        {isValid &&
          (suffix ? (
            suffix
          ) : (
            <Check
              className="icon-img"
              fill={!disabled ? "#2b468a" : "#a1a1a1"}
            />
          ))}
      </div>
    </div>
  );
};

export default Text;
