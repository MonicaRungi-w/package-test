import React, { ReactNode, useState } from "react";
import { EyeHide, EyeShow } from "../../../assets";
import { InputType } from "../Input";

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
        type={show ? InputType.text : InputType.password}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="password-image-container" onClick={() => setShow(!show)}>
        <img src={show ? EyeShow : EyeHide} className="icon-img" />
      </div>
    </div>
  );
};

export default Password;
