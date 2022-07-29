import React, { useEffect, useState } from "react";

import "./Toast.css";
import "../common.css";
import "../../utils/colors.css";
import XIcon from "../../assets/svg-components/x-icon";
import ErrorIcon from "../../assets/svg-components/error-icon";
import InfoIcon from "../../assets/svg-components/info-icon";
import WarningIcon from "../../assets/svg-components/warning-icon";
import SuccessIcon from "../../assets/svg-components/success-icon";

export interface ToastProps {
  toastList: {
    id: string;
    title: string;
    description: string;
    backgroundColor?: string;
    textColor?: string;
    icon?: string;
    type?: "error" | "warning" | "success" | "info";
  }[];
  position?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  autoDelete?: boolean;
  autoDeleteTime?: number;
}

const Toast = ({
  toastList,
  position = "top-right",
  autoDelete = true,
  autoDeleteTime,
}: ToastProps) => {
  const [list, setList] = useState<
    {
      id: string;
      title: string;
      description: string;
      backgroundColor?: string;
      textColor?: string;
      icon?: string;
      type?: "error" | "warning" | "success" | "info";
    }[]
  >([]);
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
    if (autoDelete) {
      const interval = setInterval(() => {
        if (autoDeleteTimeTmp && toastList.length && list.length) {
          deleteToast(toastList[0].id);
        }
      }, autoDeleteTimeTmp);

      return () => {
        clearInterval(interval);
      };
    }
  }, [toastList, autoDelete, autoDeleteTimeTmp, list]);

  return (
    <div className={`notification-container ${position}`}>
      {list?.map((toast, idx) => {
        return (
          <div key={idx} className={`notification-wrapper ${position}`}>
            <div
              key={idx}
              className={`notification-content toast-item  ${toast.type}`}
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
                <XIcon fill={toast.textColor} />
              </div>
              <div className="logo-title-wrapper">
                <div className="notification-image">
                  {toast.type === "error" ? (
                    <ErrorIcon
                      className={`${toast.type}-filter`}
                      fill="#bb2124"
                    />
                  ) : toast.type === "info" ? (
                    <InfoIcon
                      className={`${toast.type}-filter`}
                      fill="#2b468a"
                    />
                  ) : toast.type === "warning" ? (
                    <WarningIcon
                      className={`${toast.type}-filter`}
                      fill="#f0ad4e"
                    />
                  ) : toast.type === "success" ? (
                    <SuccessIcon
                      className={`${toast.type}-filter`}
                      fill="#22bb33"
                    />
                  ) : (
                    <img src={toast.icon} />
                  )}
                </div>
                <div>
                  <p className="notification-title">{toast.title}</p>
                  <p className="notification-message">{toast.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Toast;
