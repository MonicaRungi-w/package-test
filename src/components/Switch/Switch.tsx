import React, { PropsWithChildren, useState } from "react";

import "./../common.css";
import "./Switch.css";

export interface SwitchProps extends PropsWithChildren {
  isToggled: boolean;
  setIsToggled: (b: boolean) => void;
  disabled?: boolean;
}

const Switch = ({
  isToggled,
  setIsToggled,
  disabled = false,
  ...props
}: SwitchProps) => {
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <label className={["toggle-switch"].join(" ")} {...props}>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
        disabled={disabled}
      />
      <span
        className={["switch", disabled ? "switch-disabled" : ""].join(" ")}
      />
    </label>
  );
};

export default Switch;
