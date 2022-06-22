import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePicker from "./DatePicker";

export default {
  title: "ReactComponentLibrary/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [value, setValue] = useState("");
  return (
    <DatePicker
      value={value}
      {...args}
      onChange={(date: string) => setValue(date)}
    />
  );
};

export const Simple = Template.bind({});
Simple.args = {
  placeholder: "Pick a date",
};

export const Range = Template.bind({});
Range.args = {
  placeholder: "Pick a date",
  type: "range",
};
