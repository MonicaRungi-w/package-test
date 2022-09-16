import React from "react";

import "./Button.css";
import "../common.css";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  children?: React.ReactNode;
  variant: "primary" | "secondary" | "neutral" | "link";
  underlined?: boolean;
  disable?: boolean;
  size?: "small" | "large";
  onClick: () => void;
};

const Button = (props: ButtonProps) => {
  const disable = props.disable ? "button--disabled" : "";
  const isDisabled = props.disable ? props.disable : false;
  const isUnderlined = props.variant === "link" && props.underlined;

  return (
    <button
      type="button"
      disabled={isDisabled}
      {...props}
      className={[
        "button-property",
        props.size ? `button--${props.size}` : "",
        `button--${props.variant}`,
        isUnderlined ? `button--underlined` : "",
        disable,
        props.className,
      ].join(" ")}
    >
      {props.children}
    </button>
  );
};

export default Button;
