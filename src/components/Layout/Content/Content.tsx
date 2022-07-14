import React, { PropsWithChildren, ReactNode } from "react";

import "./Content.css";

export interface ContentProps extends PropsWithChildren {}

const Content = ({ ...props }: ContentProps) => {
  return (
    <div className="container" {...props}>
      {props.children}
    </div>
  );
};

export default Content;
