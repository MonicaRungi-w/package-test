import React, { PropsWithChildren } from "react";

import "./../common.css";
import "./Tab.css";

export interface TabProps extends PropsWithChildren {
  title: string;
  className: string;
  onClick: () => void;
}

const Tab = ({ title, ...props }: TabProps) => {
  return <div {...props}>{title}</div>;
};

export default Tab;
