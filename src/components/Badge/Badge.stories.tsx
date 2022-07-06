import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";

export default {
  title: "ReactComponentLibrary/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return (
    <Badge {...args}>
      <div style={{ width: "100px", backgroundColor: "aliceblue" }}>
        Badge Component
      </div>
    </Badge>
  );
};

export const BadgeComponent = Template.bind({});
BadgeComponent.args = {
  text: "New",
};
