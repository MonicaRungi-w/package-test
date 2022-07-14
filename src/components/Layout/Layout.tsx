import React, { PropsWithChildren } from "react";

import "./Layout.css";
import "../common.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

type LayoutProps = JSX.IntrinsicElements["div"] & {};

const Layout = ({ ...props }: LayoutProps) => {
  return (
    <div className="layout-container" {...props}>
      {props.children}
    </div>
  );
};

export default Layout;
