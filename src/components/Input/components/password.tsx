import React, { ReactNode, useState } from "react";
import EyeHide from "../../../assets/svg-components/eye-hide";
import EyeShow from "../../../assets/svg-components/eye-show";

export interface PasswordProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  icon: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
}

const Password = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  icon,
  prefix,
  suffix,
  disabled = false,
  ...props
}: PasswordProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={[
        "text-field-container",
        fullWidth ? "fullWidth" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <input
        type={show ? "text" : "password"}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
      <div className="password-image-container" onClick={() => setShow(!show)}>
        {show ? (
          <EyeShow
            className="icon-img"
            fill={!disabled ? "#2b468a" : "#a1a1a1"}
          />
        ) : (
          <EyeHide
            className="icon-img"
            fill={!disabled ? "#2b468a" : "#a1a1a1"}
          />
        )}
      </div>
    </div>
  );
};

export default Password;
