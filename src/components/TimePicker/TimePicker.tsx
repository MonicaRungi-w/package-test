import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ClockIcon from "../../assets/svg-components/clock-icon";
import DatePickerIcon from "../../assets/svg-components/date-picker-icon";

import "./../common.css";
import "./TimePicker.css";

const range = (start: number, end: number) =>
  Array.from(Array(end - start + 1).keys()).map((x) => (x + start).toString());

type TimePickerProps = JSX.IntrinsicElements["div"] & {
  value?: string;
  onTimeChange: (value: string) => void;
  icon?: string;
};

const TimePicker = ({
  value,
  onTimeChange,
  icon,
  ...props
}: TimePickerProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const hourList = range(0, 12);
  const minutesList = range(0, 59);
  const [hour, setHour] = useState<string | undefined>(
    value ? value.split(":")[0] : undefined
  );
  const [minute, setMinute] = useState<string | undefined>(
    value ? value.split(":")[1] : undefined
  );
  const [toggleWindow, setToggleWindow] = useState(false);
  const Icon = icon;

  const handleClickOutside = (event: Event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setToggleWindow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  useEffect(() => {
    if (hour && minute) {
      onTimeChange(`${hour}:${minute}`);
    }
  }, [hour, minute]);

  return (
    <div ref={wrapperRef} style={{ width: "150px" }} {...props}>
      <Row
        className="time-picker"
        onClick={() => setToggleWindow(!toggleWindow)}
      >
        <Col className="col-3 selected-time">
          {hour ? hour?.padStart(2, "0") : "00"}
        </Col>
        <Col className="col-2 divider">:</Col>
        <Col className="col-3 selected-time">
          {minute ? minute?.padStart(2, "0") : "00"}
        </Col>
        <Col className="col-3">
          {typeof Icon === "string" ? (
            <img src={Icon} className="date-picker-icon" />
          ) : (
            <ClockIcon className="time-picker-icon" fill="#2b468a" />
          )}
        </Col>
      </Row>
      {toggleWindow && (
        <div className="time-selector">
          <div className="number-container">
            {hourList.map((h, idx) => (
              <div
                key={idx}
                className="number-detail"
                onClick={() => setHour(h)}
              >
                {h.padStart(2, "0")}
              </div>
            ))}
          </div>
          <div className="number-container">
            {minutesList.map((m, idx) => (
              <div
                key={idx}
                className="number-detail"
                onClick={() => setMinute(m)}
              >
                {m.padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
