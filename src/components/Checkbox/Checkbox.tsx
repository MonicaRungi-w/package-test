import React, { useEffect, useState } from "react";

import "../common.css";
import "./Checkbox.css";

type CheckboxProps = JSX.IntrinsicElements["input"] & {
  label?: string;
  disable?: boolean;
  checked: boolean;
  setChecked: (b: boolean) => void;
};

const Checkbox = ({
  label,
  disable = false,
  checked,
  setChecked,
  ...props
}: CheckboxProps) => {
  return (
    <div className={["checkbox-container"].join(" ")}>
      <input
        id={label}
        type="checkbox"
        className={["check-box", disable].join(" ")}
        disabled={disable}
        checked={checked}
        {...props}
        onChange={() => {
          setChecked(!checked);
        }}
      />
      <label className={disable ? "label-disabled" : ""}>{label}</label>
    </div>
  );
};

export default Checkbox;
