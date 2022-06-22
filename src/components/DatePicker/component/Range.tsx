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

export interface RangeProps {
  placeholder?: string;
  startDate?: string;
  endDate?: string;
  icon: string;
}

const Range = (props: RangeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<"day" | "month" | "year">("day");
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const [selectedStartDay, setSelectedStartDay] = useState(
    startDate ? new Date(startDate) : null
  );
  const [selectedEndDay, setSelectedEndDay] = useState(
    endDate ? new Date(endDate) : null
  );
  const [isOpen, setIsOpen] = useState(true);
  const [isStartOpen, setIsStartOpen] = useState(true);
  const [days, setDays] = useState<number[]>();
  const [startMonth, setStartMonth] = useState(
    selectedStartDay ? selectedStartDay.getMonth() : new Date().getMonth()
  );
  const [endMonth, setEndMonth] = useState(
    selectedEndDay ? selectedEndDay.getMonth() : new Date().getMonth()
  );
  const [startYear, setStartYear] = useState(
    selectedStartDay ? selectedStartDay.getFullYear() : new Date().getFullYear()
  );
  const [endYear, setEndYear] = useState(
    selectedEndDay ? selectedEndDay.getFullYear() : new Date().getFullYear()
  );
  const [startDecade, setStartDecade] = useState<number[]>([]);
  const [endDecade, setEndDecade] = useState<number[]>([]);
  const [blanks, setBlanks] = useState<string[]>();

  const [hoveredDate, setHoveredDate] = useState<Date>();

  const toggleDatePicker = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      setIsStartOpen(true);
      //   if (value && !moment(value, format).isValid()) {
      //     console.log("invalid");
      //     setValue("");
      //     setSelectedDay(null);
      //     setMonth(new Date().getMonth());
      //     setYear(new Date().getFullYear());
      //   }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handlePrevClick = () => {
    if (isStartOpen) {
      switch (selected) {
        case "day":
          getPrevMonth(startMonth, startYear, setStartMonth, setStartYear);
          break;
        case "month":
          getPrevYear(startYear, setStartYear);
          break;
        case "year":
          getPrevDecade(startDecade, setStartDecade);
          break;
        default:
          break;
      }
    } else {
      switch (selected) {
        case "day":
          getPrevMonth(endMonth, endYear, setEndMonth, setEndYear);
          break;
        case "month":
          getPrevYear(endYear, setEndYear);
          break;
        case "year":
          getPrevDecade(endDecade, setEndDecade);
          break;
        default:
          break;
      }
    }
  };

  const handleNextClick = () => {
    if (isStartOpen) {
      switch (selected) {
        case "day":
          getNextMonth(startMonth, startYear, setStartMonth, setStartYear);
          break;
        case "month":
          getNextYear(startYear, setStartYear);
          break;
        case "year":
          getNextDecade(startDecade, setStartDecade);
          break;
        default:
          break;
      }
    } else {
      switch (selected) {
        case "day":
          getNextMonth(endMonth, endYear, setEndMonth, setEndYear);
          break;
        case "month":
          getNextYear(endYear, setEndYear);
          break;
        case "year":
          getNextDecade(endDecade, setEndDecade);
          break;
        default:
          break;
      }
    }
  };

  const handleSelectedDate = (day: number) => {
    if (isStartOpen) {
      const date = new Date(startYear, startMonth, day);
      setSelectedStartDay(date);
      setStartDate(formatDate(date));
      setIsOpen(false);
    } else {
      const date = new Date(endYear, endMonth, day);
      if (selectedStartDay && date > selectedStartDay) {
        setSelectedEndDay(date);
        setEndDate(formatDate(date));
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    if (isStartOpen) {
      getDaysInMonth(startYear, startMonth, setDays);
      firstDayOfMonth(new Date(startYear, startMonth, 1), setBlanks);
    } else {
      getDaysInMonth(endYear, endMonth, setDays);
      firstDayOfMonth(new Date(endYear, endMonth, 1), setBlanks);
    }
  }, [startMonth, startYear, endMonth, endYear, isStartOpen]);

  const handleRangeStyle = (day: number) => {
    const style = [];
    if (
      !isStartOpen &&
      selectedStartDay &&
      selectedStartDay.getDate() === day &&
      selectedStartDay.getMonth() === endMonth &&
      selectedStartDay.getFullYear() === endYear
    ) {
      style.push("selected-start");
    } else if (
      isStartOpen &&
      selectedStartDay &&
      selectedStartDay.getDate() === day &&
      selectedStartDay.getMonth() === startMonth &&
      selectedStartDay.getFullYear() === startYear
    ) {
      style.push("selected-start");
    }
    if (
      !isStartOpen &&
      selectedEndDay &&
      selectedEndDay.getDate() === day &&
      selectedEndDay.getMonth() === endMonth &&
      selectedEndDay.getFullYear() === endYear
    ) {
      style.push("selected-end");
    }
    if (
      !isStartOpen &&
      selectedStartDay &&
      new Date(endYear, endMonth, day) < selectedStartDay
    ) {
      style.push("day-disabled");
    }
    if (
      !isStartOpen &&
      selectedStartDay &&
      new Date(endYear, endMonth, day) > selectedStartDay &&
      selectedEndDay &&
      new Date(endYear, endMonth, day) < selectedEndDay
    ) {
      style.push("day-enabled");
    }
    if (
      !isStartOpen &&
      !selectedEndDay &&
      selectedStartDay &&
      new Date(endYear, endMonth, day) > selectedStartDay &&
      hoveredDate &&
      new Date(endYear, endMonth, day) < hoveredDate
    ) {
      style.push("day-enabled");
    }
    return style;
  };

  return (
    <div className="date-picker date-picker-range" ref={wrapperRef}>
      <div className="range-picker-container">
        <div className="input-container">
          <div
            className="selected-date"
            onClick={() => {
              toggleDatePicker();
              setIsStartOpen(true);
            }}
          >
            <input
              id={props.placeholder}
              type="text"
              className="date-picker-text-field"
              autoComplete="hidden"
              {...props}
              value={startDate ? startDate : ""}
              onChange={(e) => {}}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setIsOpen(false);
                }
              }}
            />
          </div>
          <div className="date-divider" />
          <div
            className="selected-date"
            onClick={() => {
              toggleDatePicker();
              setIsStartOpen(false);
            }}
          >
            <input
              id={props.placeholder}
              type="text"
              className="date-picker-text-field"
              autoComplete="false"
              {...props}
              value={endDate ? endDate : ""}
              onChange={(e) => {}}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  setIsOpen(false);
                }
              }}
            />
          </div>
        </div>
        <img src={props.icon} className="date-picker-icon" />
      </div>
      <div
        className={[
          isOpen ? "dates-open" : "dates-close",
          isStartOpen ? "dates-open-range-start" : "dates-open-range-end",
        ].join(" ")}
      >
        <div className="month-selected">
          <div className="arrows prev-mth" onClick={() => handlePrevClick()}>
            &lt;
          </div>

          <div className="mth">
            <div className="mth-btn" onClick={() => setSelected("month")}>
              {selected === "day"
                ? months[isStartOpen ? startMonth : endMonth]
                : ""}
            </div>
            <div
              className="year-btn"
              onClick={() => {
                isStartOpen
                  ? getDecade(startYear, setStartDecade)
                  : getDecade(endYear, setEndDecade);
                setSelected("year");
              }}
            >
              {selected !== "year"
                ? isStartOpen
                  ? startYear
                  : endYear
                : isStartOpen
                ? startDecade[0] + "-" + startDecade[startDecade.length - 1]
                : endDecade[0] + "-" + endDecade[endDecade.length - 1]}
            </div>
          </div>

          <div className="arrows next-mth" onClick={() => handleNextClick()}>
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
            {days?.map((day) => {
              return (
                <div
                  className={["day", handleRangeStyle(day)].join(" ")}
                  onClick={() => handleSelectedDate(day)}
                  onMouseOver={() =>
                    !isStartOpen &&
                    setHoveredDate(new Date(endYear, endMonth, day))
                  }
                >
                  {day}
                </div>
              );
            })}
          </div>
        )}

        {selected === "month" && (
          <div className="months">
            {months.map((m, idx) => (
              <div
                className={[
                  "month",
                  isStartOpen
                    ? (startMonth || startMonth === 0) && startMonth === idx
                      ? "selected"
                      : ""
                    : (endMonth || endMonth === 0) && endMonth === idx
                    ? "selected"
                    : "",
                ].join(" ")}
                onClick={() => {
                  isStartOpen ? setStartMonth(idx) : setEndMonth(idx);
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
            {(isStartOpen ? startDecade : endDecade).map((d) => (
              <div
                className={[
                  "year",
                  isStartOpen
                    ? startYear && startYear === d
                      ? "selected"
                      : ""
                    : endYear && endYear === d
                    ? "selected"
                    : "",
                ].join(" ")}
                onClick={() => {
                  isStartOpen ? setStartYear(d) : setEndYear(d);
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

export default Range;
