import React, { useEffect, useState } from "react";

import "./Slider.css";
import "../common.css";
import Input from "../Input";

export interface SliderProps {
  value: string;
  setValue: (n: string) => void;
  disabled?: boolean;
}

const Slider = ({
  // label, value,
  value,
  setValue,
  disabled,
  ...props
}: SliderProps) => {
  return (
    <div className="slider-wrapper">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        className="slider"
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${value}% 100%` }}
        disabled={disabled}
      />
      <div className="value">{value}%</div>
    </div>
  );
};

export default Slider;
