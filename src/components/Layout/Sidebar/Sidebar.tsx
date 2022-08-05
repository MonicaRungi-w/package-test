import React, { useState } from "react";
import AngleUp from "../../../assets/svg-components/angle-up";
import "bootstrap/dist/js/bootstrap.min.js";

import "./Sidebar.css";

export type Item = {
  key: string;
  label: string;
  icon: string;
};

type SidebarProps = JSX.IntrinsicElements["div"] & {
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

const Sidebar = ({
  collapsible = true,
  title,
  iconTitle,
  items,
  footer,
  isOpen,
  setIsOpen,
  ...props
}: SidebarProps) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div
      id="sidebar-container"
      className={[isActive ? "sidebar-expanded" : "sidebar-collapsed"].join(
        " "
      )}
    >
      <ul className="list-group">
        <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
          <img src={iconTitle} className="title-icon" />

          <small
            className={[
              isActive ? "title-fade-in" : "title-fade-out",
              "d-none d-sm-block",
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

        {items?.map((item, idx) => (
          <a
            key={idx}
            data-toggle="collapse"
            aria-expanded="false"
            className="bg-dark list-group-item list-group-item-action flex-column align-items-start item"
            onClick={item.link}
          >
            <div
              className={[
                "d-flex w-100",
                "align-items-center",
                isActive ? "justify-content-start" : "justify-content-center",
              ].join(" ")}
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
                <span className="menu-collapsed text-light d-none d-sm-block">
                  {item.label}
                </span>
              )}
            </div>
          </a>
        ))}
      </ul>
      {isActive && (
        <small className="text-light sidebar-footer d-none d-sm-block">
          {footer}
        </small>
      )}
    </div>
  );
};

export default Sidebar;
