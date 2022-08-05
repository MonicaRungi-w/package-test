import React, { PropsWithChildren, ReactNode } from "react";

import "./Footer.css";

type FooterProps = JSX.IntrinsicElements["footer"] & {};

const Footer = ({ ...props }: FooterProps) => {
  return (
    <footer className="row bg-light py-4 px-3 mt-auto footer-container" {...props}>
      <div className="col"> {props.children} </div>
    </footer>
  );
};

export default Footer;
