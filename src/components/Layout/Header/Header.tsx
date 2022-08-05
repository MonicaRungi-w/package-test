import React, { ReactNode, useState } from "react";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

type HeaderProps = JSX.IntrinsicElements["div"] & {
  logoComponent: ReactNode;
  titleComponent: ReactNode;
  navbarItems: ReactNode[];
};

const Header = ({
  logoComponent,
  titleComponent,
  navbarItems,
  ...props
}: HeaderProps) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="sticky-top">
      <Container>
        <div className="logo-title-container">
          <div>{logoComponent}</div>
          <Navbar.Brand href="#">{titleComponent}</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="toggle-menu" color="light" />
        <Navbar.Collapse className="text-alignment">
          <ul className="navbar-nav ml-auto">
            {navbarItems?.map((item, idx) => (
              <li key={idx} className="navbar-item color-white text-light mx-2">
                {item}
              </li>
            ))}
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
