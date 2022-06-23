import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input, { InputType } from "./Input";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Text = Template.bind({});
Text.args = {
  placeholder: "Enter simple text",
  type: InputType.text,
};

export const Number = Template.bind({});
Number.args = {
  placeholder: "Enter number",
  type: InputType.number,
};

export const TextArea = Template.bind({});
TextArea.args = {
  placeholder: "Enter text",
  type: InputType.textArea,
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Enter password",
  type: InputType.password,
};
