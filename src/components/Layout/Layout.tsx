import React, { PropsWithChildren } from "react";

import "./Layout.css";
import "../common.css";
import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps extends PropsWithChildren {}

const Layout = ({ ...props }: LayoutProps) => {
  return (
    <>
      <Header
        titleComponent={"prova"}
        logoComponent={<img src="prova" />}
        rightComponent={<div>RightComponent</div>}
      />
      <main style={{height:'300px'}}>{props.children}</main>
      <Footer>footer template</Footer>
    </>
  );
};

export default Layout;
