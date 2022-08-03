import React, { PropsWithChildren, useState } from "react";
import Add from "../../assets/svg-components/add";

import "./../common.css";
import "./Fab.css";

type FabProps = JSX.IntrinsicElements["ul"] & {
  icon?: JSX.Element;
  actions?: { label: string; icon: string; onClick: () => void }[];
  onClick?: () => void;
};

const Fab = ({ icon, actions, onClick, ...props }: FabProps) => {
  const [open, setOpen] = useState(false);

  const mouseEnter = () => setOpen(true);

  const mouseLeave = () => setOpen(false);

  return (
    <ul
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...props}
      className={["fab-container", props.className].join(" ")}
    >
      <li className="fab-button" onClick={onClick ? onClick : () => {}}>
        {icon ? icon : <Add className="fab-icon" fill="white" />}
      </li>
      {actions?.map((action, index) => (
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
