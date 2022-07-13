import React, { ReactNode } from "react";

export interface TextProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const Text = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
  ...props
}: TextProps) => {
  return (
    <div
      className={["text-field-container", fullWidth ? "full-width" : ""].join(
        " "
      )}
    >
      <input
        type={"text"}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Text;
