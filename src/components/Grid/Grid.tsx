import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type GridProps = JSX.IntrinsicElements["div"] & {};

const Grid = ({ ...props }: GridProps) => {
  return <div className="container">{props.children}</div>;
};

export default Grid;
