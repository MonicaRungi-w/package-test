import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button style={{ backgroundColor: "red" }}>{props.label}</button>;
};

export default Button;
