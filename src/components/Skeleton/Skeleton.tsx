import React from "react";

import "./Skeleton.css";
import "../common.css";

export interface SkeletonProps {
  type: "title" | "text" | "thumbnail" | "avatar";
}

const Skeleton = ({ type, ...props }: SkeletonProps) => {
  const classes = `skeleton ${type} loading`;
  console.log(classes);

  return <div className={classes} {...props}></div>;
};

export default Skeleton;
