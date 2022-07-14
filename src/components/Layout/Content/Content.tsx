import React, { PropsWithChildren } from "react";

import "./Content.css";

type ContentProps = JSX.IntrinsicElements["div"] & {};

const Content = ({ ...props }: ContentProps) => {
  return (
    <article className="container" {...props}>
      <div className="content">{props.children}</div>
    </article>
  );
};

export default Content;
