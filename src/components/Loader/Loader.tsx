import React, { PropsWithChildren } from "react";

import "./../common.css";
import "./Loader.css";

export interface LoaderProps extends PropsWithChildren {
  overlay?: boolean;
  size?: "small" | "medium" | "large" | "extra-large";
}

const Loader = ({
  overlay = false,
  size = "medium",
  ...props
}: LoaderProps) => {
  return (
    <div className={overlay ? "lds-spinner-overlay" : ""} {...props}>
      <div className={["lds-spinner", size].join(" ")}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
