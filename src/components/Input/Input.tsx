import React, { ReactNode } from "react";

import "./Input.css";
import "../common.css";
import Text from "./components/text";
import NumberInput from "./components/number";
import TextArea from "./components/text-area";
import Password from "./components/password";

export enum InputType {
  text = "text",
  textArea = "text-area",
  number = "number",
  password = "password",
  telephone = "tel",
}

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  type?: InputType;
  fullWidth?: boolean;
  icon?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const Input = ({
  placeholder,
  value,
  onChange,
  type = InputType.text,
  fullWidth = false,
  icon = "",
  prefix,
  suffix,
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
    case InputType.telephone:
      return <></>;
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
  }
};

export default Input;
