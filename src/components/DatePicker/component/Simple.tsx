import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  firstDayOfMonth,
  formatDate,
  getDaysInMonth,
  getDecade,
  getNextDecade,
  getNextMonth,
  getNextYear,
  getPrevDecade,
  getPrevMonth,
  getPrevYear,
} from "../helper";

import "../DatePicker.css";
import "../../common.css";

const months = moment.monthsShort();

const week = moment.weekdaysShort();

export interface SimpleProps {
  placeholder?: string;
  value?: string;
  icon: string;
  onChange: (value: string) => void;
  dateFormat?: string[];
}

const Simple = (props: SimpleProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<"day" | "month" | "year">("day");
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(props.value);
  const [selectedDay, setSelectedDay] = useState(
    value ? new Date(value) : null
  );
  const [days, setDays] = useState<number[]>();
  const [month, setMonth] = useState(
    selectedDay ? selectedDay.getMonth() : new Date().getMonth()
  );
  const [year, setYear] = useState(
    selectedDay ? selectedDay.getFullYear() : new Date().getFullYear()
  );
  const [decade, setDecade] = useState<number[]>([]);
  const [blanks, setBlanks] = useState<string[]>();
  const format = props.dateFormat ? props.dateFormat : ["DD/MM/YYYY"];

  const toggleDatePicker = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    getDaysInMonth(year, month, setDays);
    firstDayOfMonth(new Date(year, month, 1), setBlanks);
  }, [month, year]);

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
          {...props}
          value={value ? value : ""}
          onChange={(e) => handleInputString(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setIsOpen(false);
            }
          }}
        />
        <img src={props.icon} className="date-picker-icon" />
      </div>
      <div className={isOpen ? "dates-open" : "dates-close"}>
        <div className="month-selected">
          <div
            className="arrows prev-mth"
            onClick={() =>
              selected === "day"
                ? getPrevMonth(month, year, setMonth, setYear)
                : selected === "month"
                ? getPrevYear(year, setYear)
                : getPrevDecade(decade, setDecade)
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
                getDecade(year, setDecade);
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
                ? getNextMonth(month, year, setMonth, setYear)
                : selected === "month"
                ? getNextYear(year, setYear)
                : getNextDecade(decade, setDecade)
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
              <div>{blank}</div>
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

export default Simple;
