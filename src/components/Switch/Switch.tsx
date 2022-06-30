import React, { PropsWithChildren, useState } from "react";

import "./../common.css";
import "./Switch.css";

export interface SwitchProps extends PropsWithChildren {
  isToggled: boolean;
  setIsToggled: (b: boolean) => void;
}

const Switch = ({ isToggled, setIsToggled, ...props }: SwitchProps) => {
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <label className="toggle-switch" {...props}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
};

export default Switch;
