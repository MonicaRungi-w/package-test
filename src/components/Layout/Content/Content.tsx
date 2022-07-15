import React, { PropsWithChildren } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Content.css";

export interface ContentProps extends PropsWithChildren {}

const Content = ({ ...props }: ContentProps) => {
  return (
    <Container id="content" {...props}>
      <Row>
        <Col>{props.children}</Col>
      </Row>
    </Container>
  );
};

export default Content;
