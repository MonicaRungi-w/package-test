import moment from "moment";
import React, { useEffect, useState } from "react";

import "../common.css";
import DatePicker from "../DatePicker";
import TimePicker from "../TimePicker";

export interface DateTimePickerProps {
  placeholder?: string;
  placeholderEnd?: string;
  value?: string;
  valueEnd?: string;
  icon?: string;
  onChange: (date: Date) => void;
  dateformat?: string[];
  fullWidth?: boolean;
  disabled?: boolean;
}

const DateTimePicker = (props: DateTimePickerProps) => {
  const icon = props.icon;
  const dateFormat =
    props.dateformat && props.dateformat?.length > 0
      ? props.dateformat
      : ["DD/MM/YYYY"];
  const disabled = props.disabled ? props.disabled : false;
  const [date, setDate] = useState<Date | undefined>(
    props.value ? moment(props.value).toDate() : undefined
  );
  const [time, setTime] = useState(
    props.value ? moment(props.value).format("hh:mm") : undefined
  );

  useEffect(() => {
    if (date && time) {
      const newDate = new Date(date);
      newDate.setHours(Number(time.split(":")[0]));
      newDate.setMinutes(Number(time.split(":")[1]));
      props.onChange(newDate);
    }
  }, [time, date]);

  return (
    <div style={{ display: "flex" }}>
      <DatePicker
        placeholder={props.placeholder}
        value={date ? moment(date).format("DD/MM/YYYY") : ""}
        icon={icon}
        onChange={setDate}
        onChangeEnd={() => {}}
        dateformat={dateFormat}
        fullWidth={props.fullWidth}
        disabled={disabled}
      />
      <span style={{ width: "10px" }} />
      <TimePicker onTimeChange={setTime} value={time} disabled={disabled} />
    </div>
  );
};

export default DateTimePicker;
