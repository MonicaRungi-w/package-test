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
import DatePickerIcon from "../../../assets/svg-components/date-picker-icon";
import { Col, Row } from "react-bootstrap";

const months = moment.monthsShort();

const week = moment.weekdaysShort();

export interface RangeProps {
  placeholderStart?: string;
  placeholderEnd?: string;
  startDate?: string;
  endDate?: string;
  onChangeStart: (date: Date) => void;
  onChangeEnd: (date: Date) => void;
  icon?: string;
  dateformat: string[];
  fullWidth?: boolean;
}

const Range = (props: RangeProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const Icon = props.icon;
  const [selected, setSelected] = useState<"day" | "month" | "year">("day");
  const [startDate, setStartDate] = useState(props.startDate);
  const [endDate, setEndDate] = useState(props.endDate);
  const onStartDate = props.onChangeStart;
  const onEndDate = props.onChangeEnd;
  const [selectedStartDay, setSelectedStartDay] = useState(
    startDate ? new Date(startDate) : null
  );
  const [selectedEndDay, setSelectedEndDay] = useState(
    endDate ? new Date(endDate) : null
  );
  const [isOpen, setIsOpen] = useState(false);
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
  const format = props.dateformat;

  const toggleDatePicker = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      if (isStartOpen) {
        if (startDate && !moment(startDate, format).isValid()) {
          setStartDate("");
          setSelectedStartDay(null);
          setStartMonth(new Date().getMonth());
          setStartYear(new Date().getFullYear());
        }
      } else {
        if (endDate && !moment(endDate, format).isValid()) {
          setEndDate("");
          setSelectedEndDay(null);
          setEndMonth(new Date().getMonth());
          setEndYear(new Date().getFullYear());
        }
      }
      setIsOpen(false);
      setIsStartOpen(true);
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
      if (selectedEndDay && date > selectedEndDay) {
        setSelectedEndDay(null);
        setEndDate("");
      }
      setSelectedStartDay(date);
      setStartDate(formatDate(date));
      setIsOpen(false);
      onStartDate(date);
    } else {
      const date = new Date(endYear, endMonth, day);
      if (selectedStartDay && date > selectedStartDay) {
        setSelectedEndDay(date);
        setEndDate(formatDate(date));
        setIsOpen(false);
        onEndDate(date);
      }
    }
  };

  const handleStartInputString = (text: string) => {
    setStartDate(text);
    if (moment(text, format).isValid()) {
      const date = moment(text, format);
      setSelectedStartDay(date.toDate());
      setStartMonth(date.toDate().getMonth());
      setStartYear(date.toDate().getFullYear());
      onStartDate(date.toDate());
    }
  };

  const handleEndInputString = (text: string) => {
    setEndDate(text);
    if (moment(text, format).isValid()) {
      const date = moment(text, format);
      setSelectedEndDay(date.toDate());
      setEndMonth(date.toDate().getMonth());
      setEndYear(date.toDate().getFullYear());
      onEndDate(date.toDate());
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
    <div
      className={`date-picker date-picker-range ${
        props.fullWidth ? "date-picker-full-width" : ""
      }`}
      ref={wrapperRef}
    >
      <Row className="range-picker-container">
        <Col className="col-10">
          <Row className="input-container">
            <Col className="col-6">
              <div
                className="selected-date"
                onClick={() => {
                  toggleDatePicker();
                  setIsStartOpen(true);
                }}
              >
                <input
                  placeholder={props.placeholderStart}
                  type="text"
                  className="date-picker-text-field"
                  autoComplete="hidden"
                  {...props}
                  value={startDate ? startDate : ""}
                  onChange={(e) => handleStartInputString(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setIsOpen(false);
                    }
                  }}
                />
              </div>
            </Col>
            <Col className="col-6 second-half-input-container">
              <div className="date-divider" />
              <div
                className="selected-date"
                onClick={() => {
                  toggleDatePicker();
                  setIsStartOpen(false);
                }}
              >
                <input
                  placeholder={props.placeholderEnd}
                  type="text"
                  className="date-picker-text-field"
                  autoComplete="false"
                  {...props}
                  value={endDate ? endDate : ""}
                  onChange={(e) => handleEndInputString(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setIsOpen(false);
                    }
                  }}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          className="col-2"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {typeof Icon === "string" ? (
            <img src={Icon} className="date-picker-icon" />
          ) : (
            <DatePickerIcon className="date-picker-icon" fill="#2b468a" />
          )}
        </Col>
      </Row>
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
            {week.map((day, idx) => (
              <div key={idx} className="week">
                {day}
              </div>
            ))}
            {blanks?.map((blank, idx) => (
              <div key={idx}>{blank}</div>
            ))}
            {days?.map((day, idx) => {
              return (
                <div
                  key={idx}
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
                key={idx}
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
            {(isStartOpen ? startDecade : endDecade).map((d, idx) => (
              <div
                key={idx}
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
