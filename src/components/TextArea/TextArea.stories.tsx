import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextArea from "./TextArea";

export default {
  title: "ReactComponentLibrary/TextArea",
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => {
  const [value, setValue] = useState("");
  return <TextArea {...args} value={value} onChange={(e) => setValue(e)} />;
};

export const TextAreaComponent = Template.bind({});
TextAreaComponent.args = {
  placeholder: "enter text",
  limit: 0,
};
