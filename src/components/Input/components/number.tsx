import React, { ReactNode, useState } from "react";

import "../Input.css";
import "../../common.css";
import Arrow from "../../../assets/svg-components/arrow";

export interface NumberProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  step?: number;
}

const NumberInput = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
  disabled = false,
  step = 1,
  ...props
}: NumberProps) => {
  const [numberValue, setNumberValue] = useState(
    value ? Number(value) : undefined
  );

  const addNumber = () => {
    if (numberValue) {
      onChangeInput((numberValue + step).toFixed(3).toString());
    } else if (numberValue === -1) {
      onChangeInput("0");
    } else {
      onChangeInput(step.toString());
    }
  };

  const subtractNumber = () => {
    if (numberValue) {
      onChangeInput((numberValue - step).toFixed(2).toString());
    } else {
      if (numberValue && numberValue - step === 0) {
        onChangeInput("0");
      } else {
        onChangeInput("-" + step);
      }
    }
  };

  const onChangeInput = (value: string) => {
    const number = value;
    //.replace(/[-+]?[^\d]/g, "");
    setNumberValue(
      Number(number) || Number(number) === 0 ? Number(number) : undefined
    );
    onChange(number);
  };

  return (
    <div
      className={[
        "text-field-container",
        "number-input-width",
        fullWidth ? "full-width" : "",
        disabled ? "disabled" : "",
      ].join(" ")}
    >
      <input
        type={"text"}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={numberValue}
        onChange={(e) => onChangeInput(e.target.value)}
        disabled={disabled}
      />
      <div className="number-arrows">
        <div
          className={[
            "number-arrows-item up-arrow",
            disabled ? "disabled-number" : "",
          ].join(" ")}
          onClick={disabled ? () => {} : () => addNumber()}
        >
          <Arrow className="icon-img rotate-img" fill="white" />
        </div>
        <div
          className={[
            "number-arrows-item down-arrow",
            disabled ? "disabled-number" : "",
          ].join(" ")}
          onClick={disabled ? () => {} : () => subtractNumber()}
        >
          <Arrow className="icon-img" fill="white" />
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
