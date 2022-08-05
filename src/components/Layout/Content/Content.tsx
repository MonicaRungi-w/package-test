import React, { PropsWithChildren } from "react";

import "./Content.css";

type ContentProps = JSX.IntrinsicElements["footer"] & {};

const Content = ({ ...props }: ContentProps) => {
  return (
    <main className="row overflow-auto px-4 container" {...props}>
      <div className="col pt-4">{props.children}</div>
    </main>
  );
};

export default Content;
