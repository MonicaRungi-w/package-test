import React, { PropsWithChildren } from "react";

import "./../common.css";
import "./Badge.css";
import "../../utils/colors.css";

export interface BadgeProps extends PropsWithChildren {
  text: string;
  colorBadge: string;
  colorText: string;
}

const Badge = ({ text, colorBadge, colorText, ...props }: BadgeProps) => {
  return (
    <div className="container">
      {props.children}
      <span
        className={["badge-container"].join(" ")}
        style={{
          backgroundColor: colorBadge ? colorBadge : `var(--primary)`,
        }}
      >
        <text
          className="badge-text"
          style={{
            color: colorText ? colorText : `var(--white)`,
          }}
        >
          {text}
        </text>
      </span>
    </div>
  );
};

export default Badge;
