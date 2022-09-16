import React, { useEffect, useState } from "react";

import "../common.css";
import "./Checkbox.css";

type CheckboxProps = JSX.IntrinsicElements["input"] & {
  label: string;
  disable?: boolean;
  checked?: boolean;
  setChecked: (b: boolean) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const [value, setValue] = useState(props.checked ? props.checked : false);
  const disable = props.disable ? "checkmark-disabled" : "";
  const isDisabled = props.disable ? props.disable : false;

  useEffect(() => {
    props.setChecked(value);
  }, [value]);

  return (
    <div className={["checkbox-container"].join(" ")}>
      <input
        id={props.label}
        type="checkbox"
        className={["check-box", disable].join(" ")}
        disabled={isDisabled}
        checked={value}
        {...props}
        onChange={() => setValue(!value)}
      />
      <label className={props.disable ? "label-disabled" : ""}>
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;
