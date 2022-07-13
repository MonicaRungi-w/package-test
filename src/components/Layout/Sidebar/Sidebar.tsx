import React, { PropsWithChildren, useRef, useState } from "react";
import AngleUp from "../../../assets/svg-components/angle-up";

import "./Sidebar.css";

export type Item = {
  key: string;
  label: string;
  icon: string;
  children: Item[];
};

export interface SidebarProps extends PropsWithChildren {
  collapsible?: boolean;
  title?: string;
  iconTitle?: string;
  items: Item[];
}

const Sidebar = ({
  collapsible = true,
  title,
  iconTitle,
  items,
  ...props
}: SidebarProps) => {
  const [isSideMenu, setIsSideMenu] = useState(true);
  const domeNode = useRef<HTMLDivElement>(null);

  const open = () => {
    setIsSideMenu(!isSideMenu);
  };

  return (
    <div
      className={["sidebar-container"].join(" ")}
      role={"banner"}
      style={{ left: isSideMenu ? "0" : "-200px" }}
    >
      <div className="menu-bar">
        <img src={iconTitle} />
        <h1>{title}</h1>
        <AngleUp
          className={["back", isSideMenu ? "back-open" : "back-close"].join(
            " "
          )}
          onClick={() => open()}
          fillcolor="white"
        />
      </div>
      <div className="nav-wrap" style={{ left: isSideMenu ? "0" : "-200px" }}>
        <nav className="main-nav" role="navigation">
          <ul className="unstyled list-hover-slide">
            {items?.map((item) => (
              <>
                <li key={item.key}>
                  <img src={item.icon} className="nav-icon" />
                  <a href="#">{item.label}</a>
                </li>
              </>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
