import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Row from "./Row";

export default {
  title: "ReactComponentLibrary/Row",
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => {
  return <Row {...args}>ciao</Row>;
};

export const RowComponent = Template.bind({});
RowComponent.args = {
  style: { backgroundColor: "yellow" },
};
