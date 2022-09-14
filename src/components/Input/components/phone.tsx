import React, { useEffect, useState } from "react";
import Check from "../../../assets/svg-components/check";

export interface PhoneProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  icon?: string;
  disabled?: boolean;
}

const Phone = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  icon,
  disabled = false,
  ...props
}: PhoneProps) => {
  const [prefix, setPrefix] = useState("");
  const [number, setNumber] = useState(value.split(")")[1]);

  useEffect(() => {
    if (prefix && number) {
      const newValue = `${prefix} ${number}`;
      onChange(newValue);
    }
  }, [prefix, number]);

  const handlePrefix = (value: string) => {
    const prefixFormatted = prefixFormatter(value);
    setPrefix(prefixFormatted);
  };

  const handleInput = (value: string) => {
    const formattedPhoneNumber = phoneFormatter(value);
    setNumber(formattedPhoneNumber);
  };

  const prefixFormatter = (value: string) => {
    if (!value) return value;
    const prefix = value.replace(/[^\d]/g, "");
    return `(+${prefix.slice(0, 3)})`;
  };

  const phoneFormatter = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
      3,
      6
    )} ${phoneNumber.slice(6, 10)}`;
  };

  return (
    <div
      className={[
        "text-field-container phone-text-field",
        fullWidth ? "full-width" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <input
        type={"text"}
        className="text-field text-field-prefix"
        placeholder={"(+123)"}
        {...props}
        value={prefix}
        onChange={(e) => handlePrefix(e.target.value)}
        disabled={disabled}
      />
      <div className="text-field-phone-divider"></div>
      <input
        type={"text"}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={number}
        onChange={(e) => handleInput(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};

export default Phone;
