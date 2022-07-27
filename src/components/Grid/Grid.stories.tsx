import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "./Grid";

export default {
  title: "ReactComponentLibrary/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  return <Grid {...args}>ciao</Grid>;
};

export const GridComponent = Template.bind({});
GridComponent.args = {
  style: { backgroundColor: "yellow" },
};
