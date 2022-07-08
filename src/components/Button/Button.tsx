import React from "react";
import { CSSProperties } from "react";

import "./Button.css";
import "../common.css";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
  disable?: boolean;
  size?: "small" | "large";
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const disable = props.disable ? "button--disabled" : "";
  const isDisabled = props.disable ? props.disable : false;

  return (
    <button
      type="button"
      className={[
        "button",
        props.size ? `button--${props.size}` : "",
        `button--${props.variant}`,
        disable,
      ].join(" ")}
      disabled={isDisabled}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
