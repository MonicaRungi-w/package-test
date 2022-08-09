import React, { ReactNode } from "react";
import "bootstrap/dist/js/bootstrap.min.js";

import "./Layout.css";
import "../common.css";

type LayoutProps = JSX.IntrinsicElements["div"] & {
  sidebarComponent?: ReactNode;
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
};

const Layout = ({
  sidebarComponent,
  headerComponent,
  footerComponent,
  ...props
}: LayoutProps) => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        {sidebarComponent}
        <div
          className="col d-flex flex-column min-vh-100"
          style={{ padding: "0" }}
        >
          {headerComponent}
          {props.children}
          {footerComponent}
        </div>
      </div>
    </div>
  );
};

export default Layout;
