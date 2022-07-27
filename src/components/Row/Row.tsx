import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type RowProps = JSX.IntrinsicElements["div"] & {};

const Row = ({ ...props }: RowProps) => {
  return <div className="row">{props.children}</div>;
};

export default Row;
