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
}

const NumberInput = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
  disabled = false,
  ...props
}: NumberProps) => {
  const [numberValue, setNumberValue] = useState(
    value ? Number(value) : undefined
  );

  const addNumber = () => {
    if (numberValue) {
      onChangeInput((numberValue + 1).toString());
    } else if (numberValue === -1) {
      onChangeInput("0");
    } else {
      onChangeInput("1");
    }
  };

  const subtractNumber = () => {
    if (numberValue) {
      onChangeInput((numberValue - 1).toString());
    } else if (numberValue === 1) {
      onChangeInput("0");
    } else {
      onChangeInput("-1");
    }
  };

  const onChangeInput = (value: string) => {
    setNumberValue(
      Number(value) || Number(value) === 0 ? Number(value) : undefined
    );
    onChange(value);
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
