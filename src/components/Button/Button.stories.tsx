import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Primary Button",
  variant: "primary",
  onClick: () => console.log("Primary Button clicked!"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Primary Button",
  variant: "secondary",
  onClick: () => console.log("Secondary Button clicked!"),
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  variant: "primary",
  onClick: () => console.log("Large Button clicked!"),
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  variant: "primary",
  onClick: () => console.log("Small Button clicked!"),
  size: "small",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Button",
  disable: true
};
