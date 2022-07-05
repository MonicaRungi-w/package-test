import React, { PropsWithChildren } from "react";

import "./../common.css";
import "./Loader.css";

export enum SizeType {
  sm = "small",
  md = "medium",
  lg = "large",
  xl = "extra-large",
}

export interface LoaderProps extends PropsWithChildren {
  overlay?: boolean;
  size?: SizeType;
}

const Loader = ({
  overlay = false,
  size = SizeType.md,
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
