import React from "react";

import "./Toast.css";
import "../common.css";

export enum ErrorType {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}

export interface ToastProps {
  title: string;
  description: string;
  type?: ErrorType;
}

const Toast = ({ title, description, type = ErrorType.info }: ToastProps) => {
  return (
    <div className="notification toast">
      <button>X</button>
      <div className="notification-image">
        <img src="" alt="" />
      </div>
      <div>
        <p className="notification-title">{title}</p>
        <p className="notification-message">{description}</p>
      </div>
    </div>
  );
};

export default Toast;
