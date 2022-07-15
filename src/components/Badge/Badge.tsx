import React from "react";

import "./../common.css";
import "./Badge.css";
import "../../utils/colors.css";

type BadgeProps = JSX.IntrinsicElements["div"] & {
  text: string;
  colorBadge?: string;
  colorText?: string;
};

const Badge = ({ text, colorBadge, colorText, ...props }: BadgeProps) => {
  return (
    <div className="badge-wrapper">
      {props.children}
      <span
        className={["badge-container"].join(" ")}
        style={{
          backgroundColor: colorBadge ? colorBadge : `var(--primary)`,
        }}
        {...props}
      >
        <div
          className="badge-text"
          style={{
            color: colorText ? colorText : `var(--white)`,
          }}
        >
          {text}
        </div>
      </span>
    </div>
  );
};

export default Badge;
