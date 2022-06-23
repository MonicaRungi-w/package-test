import React, { ReactNode, useState } from "react";

import "../Input.css";
import "../../common.css";
import { InputType } from "../Input";
import { Arrow } from "../../../assets";

export interface NumberProps {
  placeholder: string;
  value: string;
  onChange: (t: string) => void;
  fullWidth?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
}

const NumberInput = ({
  placeholder,
  value,
  onChange,
  fullWidth = false,
  prefix,
  suffix,
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
      ].join(" ")}
    >
      <input
        type={InputType.text}
        className="text-field"
        placeholder={placeholder}
        {...props}
        value={numberValue}
        onChange={(e) => onChangeInput(e.target.value)}
      />
      <div className="number-arrows">
        <div
          className="number-arrows-item up-arrow"
          onClick={() => addNumber()}
        >
          <img src={Arrow} className="icon-img rotate-img" />
        </div>
        <div
          className="number-arrows-item down-arrow"
          onClick={() => subtractNumber()}
        >
          <img src={Arrow} className="icon-img" />
        </div>
      </div>
    </div>
  );
};

export default NumberInput;
