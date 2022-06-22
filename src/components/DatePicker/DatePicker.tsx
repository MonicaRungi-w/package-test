import React from "react";
import { DatePickerIcon } from "../../assets";
import Simple from "./component/Simple";

import "./DatePicker.css";
import "../common.css";
import Range from "./component/Range";

export interface DatePickerProps {
  placeholder?: string;
  value?: string;
  icon?: string;
  onChange: (date: string) => void;
  dateFormat?: string[];
  type?: "simple" | "range";
}

const DatePicker = (props: DatePickerProps) => {
  const type = props.type ? props.type : "simple";
  const icon = props.icon ? props.icon : DatePickerIcon;
  return (
    <>
      {type === "simple" ? (
        <Simple
          placeholder={props.placeholder}
          value={props.value}
          icon={icon}
          onChange={props.onChange}
          dateFormat={props.dateFormat}
        />
      ) : (
        <Range placeholder={props.placeholder} icon={icon} />
      )}
    </>
  );
};

export default DatePicker;
