import React from "react";

import "./Card.css";
import "../common.css";

type CardProps = JSX.IntrinsicElements["div"] & {
  title?: string;
  caption?: string;
  children?: React.ReactNode;
  titleStyle?: React.CSSProperties;
  captionStyle?: React.CSSProperties;
  width?: string;
  height?: string;
};

const Card = (props: CardProps) => {
  const title = props.title;
  const caption = props.caption;
  const children = props.children;
  const width = props.width;
  const height = props.height;

  return (
    <div
      className="box primary"
      style={{ width: width, height: height }}
      {...props}
    >
      {title && (
        <h2 className={["header-card"].join(" ")} style={props.titleStyle}>
          {title}
        </h2>
      )}
      {caption && (
        <p className={["description"].join(" ")} style={props.captionStyle}>
          {caption}
        </p>
      )}
      {children}
    </div>
  );
};

export default Card;
