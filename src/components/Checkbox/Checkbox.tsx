import React from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  label: string;
  disable?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const disable = props.disable ? "checkmark--disabled" : "";
  const isDisabled = props.disable ? props.disable : false;

  return (
    <label className="checkbox-container">
      <input
        id={props.label}
        type="checkbox"
        className={['check-box', disable].join(" ")}
        disabled={isDisabled}
        {...props}
      />
      {props.label}
    </label>
  );
};

export default Checkbox;
