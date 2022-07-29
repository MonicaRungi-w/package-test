import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

type ColProps = JSX.IntrinsicElements["div"] & {};

const Col = ({ ...props }: ColProps) => {
  return (
    <div {...props} className={["col", props.className].join(" ")}>
      {props.children}
    </div>
  );
};

export default Col;
