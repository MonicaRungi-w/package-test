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

const TextArea = ({
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
        "text-area-container",
        fullWidth ? "full-width" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <textarea
        className={["text-field", "text-area"].join(" ")}
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default TextArea;
