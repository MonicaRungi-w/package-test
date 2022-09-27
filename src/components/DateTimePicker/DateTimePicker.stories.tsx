import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DateTimePicker from "./DateTimePicker";

export default {
  title: "ReactComponentLibrary/DateTimePicker",
  component: DateTimePicker,
} as ComponentMeta<typeof DateTimePicker>;

const Template: ComponentStory<typeof DateTimePicker> = (args) => {
  const [value, setValue] = useState<Date>();
  useEffect(() => {
    console.log(value?.toISOString());
  }, [value]);
  return (
    <>
      <DateTimePicker {...args} onChange={setValue} />
    </>
  );
};

export const DateTime = Template.bind({});
DateTime.args = {
  placeholder: "Pick a date",
};
