import React, { ReactElement, ReactNode, ReactSVGElement } from "react";

import Text from "./components/text";
import NumberInput from "./components/number";
import Password from "./components/password";
import Search from "./components/search";
import Phone from "./components/phone";

import "./Input.css";
import "../common.css";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  type?: "text" | "number" | "password" | "search" | "email" | "phone";
  fullWidth?: boolean;
  icon?: string;
  searchValues?: { id: string; label: string }[];
  disabled?: boolean;
  step?: number;
  isValid?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
};

const Input = ({
  placeholder,
  value,
  onChange,
  type = "text",
  fullWidth = false,
  icon = "",
  searchValues,
  disabled = false,
  step,
  isValid,
  suffix,
  prefix,
  ...props
}: InputProps) => {
  const component = () => {
    switch (type) {
      case "text":
        return (
          <Text
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
            value={value}
            onChange={onChange}
            disabled={disabled}
            isValid={isValid}
            prefix={prefix}
            suffix={suffix}
          />
        );
      case "number":
        return (
          <NumberInput
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
            value={value}
            onChange={onChange}
            disabled={disabled}
            step={step}
          />
        );
      case "password":
        return (
          <Password
            placeholder={placeholder}
            fullWidth={fullWidth}
            icon={icon}
            {...props}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        );
      case "search":
        return (
          searchValues && (
            <Search
              placeholder={placeholder}
              fullWidth={fullWidth}
              icon={icon}
              searchValues={searchValues}
              {...props}
              value={value}
              onChange={onChange}
            />
          )
        );
      case "phone":
        return (
          <Phone
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        );
      default:
        <></>;
    }
  };

  return <div>{component()}</div>;
};

export default Input;
