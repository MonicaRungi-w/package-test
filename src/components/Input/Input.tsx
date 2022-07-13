import React, { ReactNode } from "react";

import "./Input.css";
import "../common.css";
import Text from "./components/text";
import NumberInput from "./components/number";
import TextArea from "./components/text-area";
import Password from "./components/password";
import Search from "./components/search";
import Email from "./components/email";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  type?: "text" | "text-area" | "number" | "password" | "search" | "email";
  fullWidth?: boolean;
  icon?: string;
  searchValues?: { id: string; label: string }[];
}

const Input = ({
  placeholder,
  value,
  onChange,
  type = "text",
  fullWidth = false,
  icon = "",
  searchValues,
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
      case "text-area":
        return (
          <TextArea
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
            value={value}
            onChange={onChange}
          />
        );
      case "email":
        return (
          <Email
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
            value={value}
            onChange={onChange}
          />
        );
      default:
        <></>;
    }
  };

  return <div>{component()}</div>;
};

export default Input;
