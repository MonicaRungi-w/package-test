import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimePicker from "./TimePicker";

export default {
  title: "ReactComponentLibrary/TimePicker",
  component: TimePicker,
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => {
  const [time, setTime] = useState("");
  console.log(time)
  return <TimePicker {...args} onTimeChange={setTime} />;
};

export const TimePickerComponent = Template.bind({});
TimePickerComponent.args = {};
