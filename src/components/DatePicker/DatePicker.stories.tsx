import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePicker from "./DatePicker";

export default {
  title: "ReactComponentLibrary/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  return <DatePicker {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  placeholder: "Pick a date",
};
