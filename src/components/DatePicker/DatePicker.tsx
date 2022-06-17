import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { DatePickerIcon } from "../../assets";

import "./DatePicker.css";
import "../common.css";
import { formatDate } from "./helper";
import { declareClass } from "@babel/types";

const months = moment.monthsShort();

const week = moment.weekdaysShort();

export interface DatePickerProps {
  placeholder?: string;
  value?: string;
  icon?: string;
  onClick: () => void;
  dateFormat?: string[];
}

const DatePicker = (props: DatePickerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<"day" | "month" | "year">("day");
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState<number[]>();
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [decade, setDecade] = useState<number[]>([]);
  const [value, setValue] = useState(props.value);
  const [selectedDay, setSelectedDay] = useState(
    value ? new Date(value) : null
  );
  const [blanks, setBlanks] = useState<string[]>();
  const format = props.dateFormat ? props.dateFormat : ["DD/MM/YYYY"];

  const getDecade = () => {
    const decade = [];
    const dec = year % 10;
    const start = year - dec;
    const end = start + 10;

    for (let i = start; i < end; i++) {
      decade.push(i);
    }

    setDecade(decade);
  };

  const getPrevMonth = () => {
    if (month > 0 && month <= 11) {
      setMonth(month - 1);
    } else if (month <= 0) {
      setMonth(11);
      setYear(year - 1);
    }
  };

  const getNextMonth = () => {
    if (month >= 0 && month < 11) {
      setMonth(month + 1);
    } else if (month >= 11) {
      setMonth(0);
      setYear(year + 1);
    }
  };

  const getNextYear = () => {
    setYear(year + 1);
  };

  const getPrevYear = () => {
    if (year > 0) {
      setYear(year - 1);
    }
  };

  const calculateDecade = (start: number, end: number) => {
    const decade = [];

    for (let i = start; i <= end; i++) {
      decade.push(i);
    }
    setDecade(decade);
  };

  const getPrevDecade = () => {
    if (decade[0] > 0) {
      calculateDecade(decade[0] - 10, decade[decade.length - 1] - 10);
    }
  };

  const getNextDecade = () => {
    calculateDecade(decade[0] + 10, decade[decade.length - 1] + 10);
  };

  const getDaysInMonth = () => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    setDays(days);
  };

  const toggleDatePicker = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    getDaysInMonth();
    firstDayOfMonth(new Date(year, month, 1));
  }, [month, year]);

  const firstDayOfMonth = (date: Date) => {
    const firstDay = moment(date).startOf("month").format("d");
    const blanks = [];
    for (let i = 0; i < Number(firstDay); i++) {
      blanks.push(" ");
    }
    setBlanks(blanks);
  };

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      if (value && !moment(value, format).isValid()) {
        console.log("invalid");
        setValue("");
        setSelectedDay(null);
        setMonth(new Date().getMonth());
        setYear(new Date().getFullYear());
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleInputString = (text: string) => {
    setValue(text);
    if (moment(text, format).isValid()) {
      const date = moment(text, format);
      setSelectedDay(date.toDate());
      setMonth(date.toDate().getMonth());
      setYear(date.toDate().getFullYear());
    }
  };

  const handleSelectedDate = (day: number) => {
    const date = new Date(year, month, day);
    setSelectedDay(date);
    setValue(formatDate(date));
    setIsOpen(false);
  };

  return (
    <div className="date-picker" ref={wrapperRef}>
      <div className="selected-date" onClick={() => toggleDatePicker()}>
        <input
          id={props.placeholder}
          type="text"
          className="date-picker-text-field"
          value={value ? value : ""}
          {...props}
          onChange={(e) => handleInputString(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setIsOpen(false);
            }
          }}
        />
        <img
          src={props.icon ? props.icon : DatePickerIcon}
          className="date-picker-icon"
        />
      </div>
      <div className={isOpen ? "dates-open" : "dates-close"}>
        <div className="month-selected">
          <div
            className="arrows prev-mth"
            onClick={() =>
              selected === "day"
                ? getPrevMonth()
                : selected === "month"
                ? getPrevYear()
                : getPrevDecade()
            }
          >
            &lt;
          </div>

          <div className="mth">
            <div className="mth-btn" onClick={() => setSelected("month")}>
              {selected === "day" ? months[month] : ""}
            </div>
            <div
              className="year-btn"
              onClick={() => {
                getDecade();
                setSelected("year");
              }}
            >
              {selected !== "year"
                ? year
                : decade[0] + "-" + decade[decade.length - 1]}
            </div>
          </div>

          <div
            className="arrows next-mth"
            onClick={() =>
              selected === "day"
                ? getNextMonth()
                : selected === "month"
                ? getNextYear()
                : getNextDecade()
            }
          >
            &gt;
          </div>
        </div>
        {selected === "day" && (
          <div className="days">
            {week.map((day) => (
              <div className="week">{day}</div>
            ))}
            {blanks?.map((blank) => (
              <div className="day">{blank}</div>
            ))}
            {days?.map((day) => (
              <div
                className={[
                  "day",
                  selectedDay &&
                  selectedDay.getDate() === day &&
                  selectedDay.getMonth() === month &&
                  selectedDay.getUTCFullYear() === year
                    ? "selected"
                    : "",
                ].join(" ")}
                onClick={() => handleSelectedDate(day)}
              >
                {day}
              </div>
            ))}
          </div>
        )}

        {selected === "month" && (
          <div className="months">
            {months.map((m, idx) => (
              <div
                className={[
                  "month",
                  (month || month === 0) && month === idx ? "selected" : "",
                ].join(" ")}
                onClick={() => {
                  setMonth(idx);
                  setSelected("day");
                }}
              >
                {m}
              </div>
            ))}
          </div>
        )}

        {selected === "year" && (
          <div className="years">
            {decade.map((d) => (
              <div
                className={["year", year && year === d ? "selected" : ""].join(
                  " "
                )}
                onClick={() => {
                  setYear(d);
                  setSelected("month");
                }}
              >
                {d}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;
