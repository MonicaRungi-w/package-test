import React, { PropsWithChildren, useState } from "react";
import { Add } from "../../assets";

import "./../common.css";
import "./Fab.css";

export interface FabProps extends PropsWithChildren {
  actions: { label: string; icon: string; onClick: () => void }[];
}

const Fab = ({ actions, ...props }: FabProps) => {
  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);

  return (
    <ul
      className="fab-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...props}
    >
      <li className="fab-button">
        <img src={Add} />
      </li>
      {actions.map((action, index) => (
        <li
          style={{ transitionDelay: `${index * 25}ms` }}
          className={["fab-action", open ? "open" : ""].join(" ")}
          key={action.label}
          onClick={action.onClick}
        >
          <img src={action.icon} />
          <span className="tooltip">{action.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Fab;
