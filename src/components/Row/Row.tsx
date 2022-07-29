import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type RowProps = JSX.IntrinsicElements["div"] & {};

const Row = ({ ...props }: RowProps) => {
  return (
    <div {...props} className={["row", props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default Row;
