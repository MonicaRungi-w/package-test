import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Enabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Enabled.args = {
  label: "Enabled Checkbox",
};
