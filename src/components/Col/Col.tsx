import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type ColProps = JSX.IntrinsicElements["div"] & {};

const Col = ({ ...props }: ColProps) => {
  return <div className="col">{props.children}</div>;
};

export default Col;
