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
  const [selected, setSelected] = useState<number>();
  const open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={["sidebar", isOpen ? "active" : ""].join(" ")}>
      <div className="logo-content">
        <div className="logo">
          <img src={iconTitle} />
          {isOpen && <div className="logo-name">{title}</div>}
          <AngleUp
            id="back-btn"
            className={["back", isOpen ? "back-open" : "back-close"].join(" ")}
            onClick={() => open()}
            fill="white"
          />
        </div>
        <ul className="nav_list">
          {items?.map((item, idx) => (
            <div key={idx}>
              <li>
                <a
                  href={item.link}
                  className={selected === idx ? "active" : ""}
                  style={{
                    justifyContent: isOpen ? "flex-start" : "center",
                  }}
                  onClick={() => setSelected(idx)}
                >
                  <img src={item.icon} />
                  {isOpen && <span className="links-name">{item.label}</span>}
                </a>
              </li>
              <span></span>
            </div>
          ))}
        </ul>
        <div className="footer-content">{footer}</div>
      </div>
    </div>
  );
};

export default Sidebar;
