import React, { ReactNode } from "react";

export interface TextProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
}

const Text = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
  disabled = false,
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
    </div>
  );
};

export default Text;
