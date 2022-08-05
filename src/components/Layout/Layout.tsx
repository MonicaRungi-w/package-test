import React, { ReactNode } from "react";
import "bootstrap/dist/js/bootstrap.min.js";

import "./Layout.css";
import "../common.css";

type LayoutProps = JSX.IntrinsicElements["div"] & {
  sidebarComponent?: ReactNode;
  footerComponent?: ReactNode;
};

const Layout = ({
  sidebarComponent,
  footerComponent,
  ...props
}: LayoutProps) => {
  return (
    <div className="container-fluid overflow-hidden">
      <div className="row vh-100 overflow-auto">
        {sidebarComponent}
        <div className="col d-flex flex-column min-vh-100" style={{ padding: "0" }}>
          {props.children}
          {footerComponent}
        </div>
      </div>
    </div>
  );
};

export default Layout;
