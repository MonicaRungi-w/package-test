import React, { useEffect, useState } from "react";
import AngleUp from "../../../../../assets/svg-components/angle-up";
import "bootstrap/dist/js/bootstrap.min.js";

import "./sidebar-large-screen.css";

export type Item = {
  key: string;
  label: string;
  icon: string;
};

type SidebarLargeScreenProps = JSX.IntrinsicElements["div"] & {
  collapsible?: boolean;
  title?: string;
  iconTitle?: string;
  items: {
    key: string;
    label: string;
    icon: string;
    link: () => void;
  }[];
  footer?: JSX.Element;
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
};

const SidebarLargeScreen = ({
  collapsible = true,
  title,
  iconTitle,
  items,
  footer,
  isOpen,
  setIsOpen,
  ...props
}: SidebarLargeScreenProps) => {
  const [isActive, setIsActive] = useState(true);
  const [selected, setSelected] =
    useState<{
      key: string;
      label: string;
      icon: string;
      link: () => void;
    }>();

  return (
    <div
      id="sidebar-container"
      className={[
        "d-none d-sm-block",
        isActive ? "sidebar-expanded" : "sidebar-collapsed",
      ].join(" ")}
      {...props}
    >
      <ul className="list-group">
        <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
          <img src={iconTitle} className="title-icon" />

          <small
            className={[
              "d-none d-md-block",
              isActive ? "title-fade-in" : "title-fade-out",
            ].join(" ")}
          >
            {title}
          </small>

          <div className="d-flex w-100 justify-content-start align-items-center">
            <AngleUp
              id="back-btn"
              className={["back", isActive ? "back-open" : "back-close"].join(
                " "
              )}
              onClick={() => setIsActive(!isActive)}
              fill="white"
            />
          </div>
        </li>

        {items?.map((item, idx) => {
          return (
            <div
              key={idx}
              id="item-container"
              className="bg-dark"
              style={{ position: "relative", display: "flex" }}
              onClick={() => setSelected(item)}
            >
              <div
                id={"on-hover-transition"}
                className={
                  item.key === selected?.key
                    ? "on-hover-transition-selected"
                    : ""
                }
              ></div>
              <a
                className="bg-transparent list-group-item list-group-item-action flex-column align-items-start item"
                onClick={item.link}
              >
                <div
                  className={["d-flex w-100", "align-items-center"].join(" ")}
                >
                  <span
                    className={[
                      "fa fa-dashboard fa-fw mr-3 submenu-icon ml-auto",
                      isActive ? "separator" : "no-separator",
                    ].join(" ")}
                  >
                    {" "}
                    <img src={item.icon} className="title-icon" />{" "}
                  </span>
                  {isActive && (
                    <span className="menu-collapsed text-light d-none d-md-block">
                      {item.label}
                    </span>
                  )}
                </div>
              </a>
            </div>
          );
        })}
      </ul>
      {isActive && (
        <small className="text-light sidebar-footer d-none d-md-block">
          {footer}
        </small>
      )}
    </div>
  );
};

export default SidebarLargeScreen;
