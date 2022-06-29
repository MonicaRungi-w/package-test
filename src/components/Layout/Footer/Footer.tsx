import React, { PropsWithChildren, ReactNode } from "react";

import "./Footer.css";

export interface FooterProps extends PropsWithChildren {}

const Footer = ({ ...props }: FooterProps) => {
  return (
    <footer className="footer" {...props}>
      {props.children}
    </footer>
  );
};

export default Footer;
