import React, { PropsWithChildren, useState } from "react";

import "./Tooltip.css";
import "../common.css";

type TooltipProps = JSX.IntrinsicElements["div"] & {
  delay?: number;
  direction?: "left" | "right" | "bottom" | "top";
  content: string;
};

const Tooltip = ({
  delay,
  direction = "top",
  content,
  ...props
}: TooltipProps) => {
  let timeout: NodeJS.Timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };
  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      {...props}
    >
      {props.children}
      {active && (
        <div className={`tooltip-tip ${direction || "top"}`}>{content}</div>
      )}
    </div>
  );
};

export default Tooltip;
