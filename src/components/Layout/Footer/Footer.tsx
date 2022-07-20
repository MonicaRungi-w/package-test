import React, { PropsWithChildren, ReactNode } from "react";

import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export interface FooterProps extends PropsWithChildren {}

const Footer = ({ ...props }: FooterProps) => {
  return <footer className="container-fluid footer">{props.children}</footer>;
};

export default Footer;
