import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePicker from "./DatePicker";

export default {
  title: "ReactComponentLibrary/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => {
  const [value, setValue] = useState<Date>();
  return (
    <>
      <DatePicker
        value={value?.toDateString()}
        {...args}
        onChange={(date: Date) => setValue(date)}
      />
    </>
  );
};

export const Simple = Template.bind({});
Simple.args = {
  placeholder: "Pick a date",
};

export const Range = Template.bind({});
Range.args = {
  placeholder: "Pick start date",
  placeholderEnd: "Pick end date",
  type: "range",
};
