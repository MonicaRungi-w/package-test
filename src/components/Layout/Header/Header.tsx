import React, { PropsWithChildren, ReactNode } from "react";

import "./Header.css";

type HeaderProps = JSX.IntrinsicElements["header"] & {
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
    <header className="header-custom" {...props}>
      <div className="logo-title-container">
        <div>{logoComponent}</div>
        <div>{titleComponent}</div>
      </div>
      <div>{rightComponent}</div>
    </header>
  );
};

export default Header;
