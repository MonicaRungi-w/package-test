import React from "react";

import "../common.css";
import "./Checkbox.css";

export interface CheckboxProps {
  label: string;
  disable?: boolean;
  checked?: boolean;
  onClick: () => void;
}

const Checkbox = (props: CheckboxProps) => {
  const disable = props.disable ? "checkmark-disabled" : "";
  const isDisabled = props.disable ? props.disable : false;

  return (
    <div className={["checkbox-container"].join(" ")}>
      <input
        id={props.label}
        type="checkbox"
        className={["check-box", disable].join(" ")}
        disabled={isDisabled}
        checked={props.checked}
        {...props}
        onClick={props.onClick}
      />
      <label className={props.disable ? "label-disabled" : ""}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
