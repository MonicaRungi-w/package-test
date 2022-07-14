import React from "react";

import "./Layout.css";
import "../common.css";

type LayoutProps = JSX.IntrinsicElements["div"] & {};

const Layout = ({ ...props }: LayoutProps) => {
  return (
    <div className="layout-container" {...props}>
      {props.children}
    </div>
  );
};

export default Layout;
