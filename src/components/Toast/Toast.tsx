import React, { useEffect, useState } from "react";

import "./Toast.css";
import "../common.css";
import "../../utils/colors.css";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "../../assets";
import XIcon from "./XIcon";

export enum ErrorType {
  error = "error",
  warning = "warning",
  success = "success",
  info = "info",
}

export enum PositionType {
  topRight = "top-right",
  bottomRight = "bottom-right",
  topLeft = "top-left",
  bottomLeft = "bottom-left",
}

export interface ToastProps {
  toastList: {
    id: string;
    title: string;
    description: string;
    backgroundColor?: string;
    textColor?: string;
    icon?: string;
    type?: ErrorType;
  }[];
  position?: PositionType;
  autoDelete?: boolean;
  autoDeleteTime?: number;
}

const Toast = ({
  toastList,
  position = PositionType.topRight,
  autoDelete = true,
  autoDeleteTime,
}: ToastProps) => {
  const [list, setList] = useState(toastList);
  const autoDeleteTimeTmp = autoDeleteTime ? autoDeleteTime : 3000;

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  const deleteToast = (id: string) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDeleteTimeTmp && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTimeTmp);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTimeTmp, list]);

  return (
    <div className={`notification-container ${position}`}>
      {list?.map((toast, idx) => (
        <div
          key={idx}
          className={`notification toast ${position} ${toast.type}`}
          style={{
            backgroundColor: toast.backgroundColor,
            color: toast.textColor,
          }}
        >
          <div
            className="img-close"
            onClick={() => {
              deleteToast(toast.id);
            }}
          >
            <XIcon fillColor={toast.textColor} />
          </div>
          <div className="notification-image">
            <img
              src={
                toast.type === ErrorType.error
                  ? ErrorIcon
                  : toast.type === ErrorType.info
                  ? InfoIcon
                  : toast.type === ErrorType.success
                  ? SuccessIcon
                  : toast.type === ErrorType.warning
                  ? WarningIcon
                  : toast.icon
                  ? toast.icon
                  : ""
              }
              alt={toast.type}
              className={`${toast.type}-filter`}
            />
          </div>
          <div>
            <p className="notification-title">{toast.title}</p>
            <p className="notification-message">{toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
