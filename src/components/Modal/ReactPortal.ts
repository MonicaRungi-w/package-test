import React from "react";
import { createPortal } from "react-dom";

const ReactPortal = (children: React.ReactNode, wrapperId: string) => {
  return createPortal(children, document.getElementById(wrapperId) as Element);
};

export default ReactPortal;
