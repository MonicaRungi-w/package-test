import React, { ReactNode } from "react";

export interface TextProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const TextArea = ({
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
      className={["text-area-container", fullWidth ? "full-width" : ""].join(
        " "
      )}
    >
      <textarea
        className={["text-field", "text-area"].join(" ")}
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
