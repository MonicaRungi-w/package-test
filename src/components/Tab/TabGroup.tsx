import React, { PropsWithChildren, ReactNode, useState } from "react";
import Tab from ".";

import "./../common.css";
import "./Tab.css";

export interface TabGroupProps extends PropsWithChildren {
  panels: { id: string; title: string; content: ReactNode }[];
}

const TabGroup = ({ panels, ...props }: TabGroupProps) => {
  const [active, setActive] = useState(panels[0]);

  return (
    <>
      <div className="tabs">
        {panels.map((panel, idx) => {
          let className = `tabs-tab`;
          if (panel.id === active.id) {
            className = `tabs-tab tabs-tab-active show`;
          }
          return (
            <Tab
              key={panel.id}
              className={className}
              onClick={() => setActive(panel)}
              title={panel.title}
            />
          );
        })}
      </div>
      {active && <div className="tab-content">{active.content}</div>}
    </>
  );
};

export default TabGroup;
