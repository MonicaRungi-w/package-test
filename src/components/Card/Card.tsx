import React, { ReactNode } from "react";

import "./Card.css";
import "../common.css";

export interface CardProps {
  title?: string;
  caption?: string;
  children?: ReactNode;
}

const Card = (props: CardProps) => {
  const title = props.title;
  const caption = props.caption;
  const children = props.children;

  return (
    <div className="box primary" {...props}>
      {title && <h2 className="header-card">{title}</h2>}
      {caption && <p className="description">{caption}</p>}
      {children}
    </div>
  );
};

export default Card;
