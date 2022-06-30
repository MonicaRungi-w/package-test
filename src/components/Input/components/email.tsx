import React, { ReactNode, useState } from "react";
import { Check, EyeHide, EyeShow } from "../../../assets";
import { InputType } from "../Input";

export interface EmailProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  icon?: string;
}

const Email = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  icon,
  ...props
}: EmailProps) => {
  const [isValid, setIsValid] = useState(false);

  const emailValidator = (value: string) => {
    const regexMail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regexMail.test(value);
    setIsValid(isValid);
    onChange(value);
  };

  return (
    <div
      className={["text-field-container", fullWidth ? "full-width" : ""].join(
        " "
      )}
    >
      <input
        type={InputType.text}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={value}
        onChange={(e) => emailValidator(e.target.value)}
      />
      <div className="valid-image-container">
        {isValid && <img src={Check} className="icon-img" />}
      </div>
    </div>
  );
};

export default Email;