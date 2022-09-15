import React, { ChangeEvent, ReactNode } from "react";

import "./Input.css";
import "../common.css";
import Text from "./components/text";
import NumberInput from "./components/number";
import TextArea from "./components/text-area";
import Password from "./components/password";
import Search from "./components/search";
import Email from "./components/email";
import Phone from "./components/phone";
import FileUploader from "./components/file-uploader";
import JSONEditor from "./components/JSONeditor";

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: string) => void;
  type?:
    | "text"
    | "text-area"
    | "number"
    | "password"
    | "search"
    | "email"
    | "phone"
    | "file"
    | "json";
  fullWidth?: boolean;
  icon?: string;
  searchValues?: { id: string; label: string }[];
  disabled?: boolean;
  step?: number;
}

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
      case "text-area":
        return (
          <TextArea
            placeholder={placeholder}
            fullWidth={fullWidth}
            {...props}
            value={value}
            onChange={onChange}
            disabled={disabled}
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
            disabled={disabled}
          />
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
      case "file":
        return <FileUploader />;
      case "json":
        return <JSONEditor value={value} onChange={onChange} />;
      default:
        <></>;
    }
  };

  return <div>{component()}</div>;
};

export default Input;
