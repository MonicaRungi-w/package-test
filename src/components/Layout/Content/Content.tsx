import React from "react";

import "./Content.css";

type ContentProps = JSX.IntrinsicElements["footer"] & {};

const Content = ({ ...props }: ContentProps) => {
  return (
    <main className="px-4 main-content-container" {...props}>
      <div className="col pt-4 body-content">{props.children}</div>
    </main>
  );
};

export default Content;
