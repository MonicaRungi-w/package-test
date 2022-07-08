import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tooltip from "./Tooltip";

export default {
  title: "ReactComponentLibrary/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px",
      }}
    >
      <Tooltip {...args}>
        <span role="img">🤠</span>
      </Tooltip>
    </div>
  );
};

export const TooltipComponent = Template.bind({});
TooltipComponent.args = {
  content: "Tooltip component",
  direction: "right",
};
