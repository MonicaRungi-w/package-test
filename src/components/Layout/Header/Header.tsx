import React, { PropsWithChildren, ReactNode } from "react";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";

type HeaderProps = JSX.IntrinsicElements["div"] & {
  logoComponent: ReactNode;
  titleComponent: ReactNode;
  rightComponent: ReactNode;
};

const Header = ({
  logoComponent,
  titleComponent,
  rightComponent,
  ...props
}: HeaderProps) => {
  return (
    <div id="header-custom" class="col-lg-12" {...props}>
      <div className="logo-title-container">
        <div>{logoComponent}</div>
        <div>{titleComponent}</div>
      </div>
      <div>{rightComponent}</div>
    </div>
  );
};

export default Header;
