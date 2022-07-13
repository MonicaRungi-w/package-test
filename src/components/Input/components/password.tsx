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
}

const Password = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  icon,
  prefix,
  suffix,
  ...props
}: PasswordProps) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={["text-field-container", fullWidth ? "full-width" : ""].join(
        " "
      )}
    >
      <input
        type={show ? "text" : "password"}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="password-image-container" onClick={() => setShow(!show)}>
        {show ? (
          <EyeShow className="icon-img" fill="#2b468a" />
        ) : (
          <EyeHide className="icon-img" fill="#2b468a" />
        )}
      </div>
    </div>
  );
};

export default Password;
