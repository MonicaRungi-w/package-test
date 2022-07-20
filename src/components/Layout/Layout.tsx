import React, { ReactNode } from "react";

import "./Layout.css";
import "../common.css";

type LayoutProps = JSX.IntrinsicElements["div"] & {
  sidebarComponent?: ReactNode;
};

const Layout = ({ sidebarComponent, ...props }: LayoutProps) => {
  return (
    <div className="layout-container" {...props}>
      {sidebarComponent}
      <div className="content-container">{props.children}</div>
    </div>
  );
};

export default Layout;
