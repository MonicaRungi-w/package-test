import React from "react";
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
  dateformat?: string[];
  type?: "simple" | "range";
  fullWidth?: boolean;
  disabled?: boolean;
}

const DatePicker = (props: DatePickerProps) => {
  const type = props.type ? props.type : "simple";
  const icon = props.icon;
  const dateFormat =
    props.dateformat && props.dateformat?.length > 0
      ? props.dateformat
      : ["DD/MM/YYYY"];
  const disabled = props.disabled ? props.disabled : false;

  return (
    <>
      {type === "simple" ? (
        <Simple
          placeholder={props.placeholder}
          value={props.value}
          icon={icon}
          onChange={props.onChange}
          dateformat={dateFormat}
          fullWidth={props.fullWidth}
          disabled={disabled}
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
          dateformat={dateFormat}
          fullWidth={props.fullWidth}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default DatePicker;
