import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Col from "./Col";

export default {
  title: "ReactComponentLibrary/Col",
  component: Col,
} as ComponentMeta<typeof Col>;

const Template: ComponentStory<typeof Col> = (args) => {
  return <Col {...args}>ciao</Col>;
};

export const ColComponent = Template.bind({});
ColComponent.args = {
  style: { backgroundColor: "yellow" },
};
