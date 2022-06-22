import React from "react";
import { DatePickerIcon } from "../../assets";
import Simple from "./component/Simple";

import "./DatePicker.css";
import "../common.css";
import Range from "./component/Range";

export interface DatePickerProps {
  placeholder?: string;
  placeholderEnd?: string;
  value?: string;
  valueEnd?: string;
  icon?: string;
  onChange: (date: Date) => void;
  onChangeEnd: (date: Date) => void;
  dateFormat?: string[];
  type?: "simple" | "range";
}

const DatePicker = (props: DatePickerProps) => {
  const type = props.type ? props.type : "simple";
  const icon = props.icon ? props.icon : DatePickerIcon;
  const dateFormat =
    props.dateFormat && props.dateFormat?.length > 0
      ? props.dateFormat
      : ["DD/MM/YYYY"];

  return (
    <>
      {type === "simple" ? (
        <Simple
          placeholder={props.placeholder}
          value={props.value}
          icon={icon}
          onChange={props.onChange}
          dateFormat={dateFormat}
        />
      ) : (
        <Range
          placeholderStart={props.placeholder}
          placeholderEnd={props.placeholderEnd}
          startDate={props.value}
          endDate={props.valueEnd}
          onChangeStart={props.onChange}
          onChangeEnd={props.onChangeEnd}
          icon={icon}
          dateFormat={dateFormat}
        />
      )}
    </>
  );
};

export default DatePicker;
