import React, { useState } from "react";
import AngleUp from "../../../assets/svg-components/angle-up";

import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    link: string;
  }[];
  footer?: JSX.Element;
};

const Sidebar = ({
  collapsible = true,
  title,
  iconTitle,
  items,
  footer,
  ...props
}: SidebarProps) => {
  const [isSideMenu, setIsSideMenu] = useState(false);

  const open = () => {
    setIsSideMenu(!isSideMenu);
  };

  return (
    <div class={["sidebar", isSideMenu ? "active" : ""].join(" ")}>
      <div class="logo-content">
        <div class="logo">
          <img src={iconTitle} />
          {isSideMenu && <div class="logo-name">{title}</div>}
          <AngleUp
            id="back-btn"
            className={["back", isSideMenu ? "back-open" : "back-close"].join(
              " "
            )}
            onClick={() => open()}
            fill="white"
          />
        </div>
        <ul class="nav_list">
          {items?.map((item, idx) => (
            <>
              <li key={idx}>
                <a
                  href={item.link}
                  style={{
                    justifyContent: isSideMenu ? "flex-start" : "center",
                  }}
                >
                  <img src={item.icon} />
                  {isSideMenu && <span class="links-name">{item.label}</span>}
                </a>
              </li>
              <span></span>
            </>
          ))}
        </ul>
        <div class="footer-content">{footer}</div>
      </div>
    </div>
  );
};

export default Sidebar;
