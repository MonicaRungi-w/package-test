import React, { ReactNode } from "react";

import "./TextArea.css";

export interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  resizable?: boolean;
  limit?: number;
}

const TextArea = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
  disabled = false,
  resizable = true,
  limit = 0,
  ...props
}: TextAreaProps) => {
  return (
    <div
      className={[
        "text-area-container",
        fullWidth ? "full-width" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <textarea
        className={[
          "text-field",
          "text-area",
          resizable ? "" : "disable-resize",
        ].join(" ")}
        placeholder={placeholder}
        maxLength={limit !== 0 ? limit : undefined}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      {limit !== 0 && (
        <div className="text-area-counter">
          <span className="current">{value.length}</span>
          <span className="maximum">/{limit}</span>
        </div>
      )}
    </div>
  );
};

export default TextArea;
