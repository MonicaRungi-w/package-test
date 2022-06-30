import React, { ReactNode } from "react";

import "./Input.css";
import "../common.css";
import Text from "./components/text";
import NumberInput from "./components/number";
import TextArea from "./components/text-area";
import Password from "./components/password";
import Search from "./components/search";
import Email from "./components/email";

export enum InputType {
  text = "text",
  textArea = "text-area",
  number = "number",
  password = "password",
  search = "search",
  email = "email",
}

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  type?: InputType;
  fullWidth?: boolean;
  icon?: string;
  searchValues?: { id: string; label: string }[];
}

const Input = ({
  placeholder,
  value,
  onChange,
  type = InputType.text,
  fullWidth = false,
  icon = "",
  searchValues,
  ...props
}: InputProps) => {
  switch (type) {
    case InputType.text:
      return (
        <Text
          placeholder={placeholder}
          fullWidth={fullWidth}
          {...props}
          value={value}
          onChange={onChange}
        />
      );
    case InputType.number:
      return (
        <NumberInput
          placeholder={placeholder}
          fullWidth={fullWidth}
          {...props}
          value={value}
          onChange={onChange}
        />
      );
    case InputType.password:
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
    case InputType.search:
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
    case InputType.textArea:
      return (
        <TextArea
          placeholder={placeholder}
          fullWidth={fullWidth}
          {...props}
          value={value}
          onChange={onChange}
        />
      );
    case InputType.email:
      return (
        <Email
          placeholder={placeholder}
          fullWidth={fullWidth}
          {...props}
          value={value}
          onChange={onChange}
        />
      );
  }
};

export default Input;
