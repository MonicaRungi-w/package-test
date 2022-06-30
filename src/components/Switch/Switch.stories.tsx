import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "./Switch";

export default {
  title: "ReactComponentLibrary/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [isToggled, setIsToggled] = useState(false);
  return <Switch {...args} isToggled={isToggled} setIsToggled={setIsToggled} />;
};

export const SwitchComponent = Template.bind({});
SwitchComponent.args = {};
