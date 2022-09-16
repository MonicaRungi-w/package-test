import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "./Input";

export default {
  title: "ReactComponentLibrary/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("");
  return <Input {...args} onChange={setValue} value={value} />;
};

export const Text = Template.bind({});
Text.args = {
  placeholder: "Enter simple text",
  type: "text",
};

export const Number = Template.bind({});
Number.args = {
  placeholder: "Enter number",
  type: "number",
};

export const TextArea = Template.bind({});
TextArea.args = {
  placeholder: "Enter text",
  type: "text-area",
};

export const Password = Template.bind({});
Password.args = {
  placeholder: "Enter password",
  type: "password",
};

export const Email = Template.bind({});
Email.args = {
  placeholder: "Enter email",
  type: "email",
};

export const Phone = Template.bind({});
Phone.args = {
  placeholder: "Enter phone number",
  type: "phone",
};

export const Search = Template.bind({});
Search.args = {
  placeholder: "Search...",
  type: "search",
  searchValues: [
    { id: "1", label: "prova1" },
    { id: "2", label: "prova2" },
    { id: "3", label: "prova1" },
  ],
};

export const JSONEditor = Template.bind({});
JSONEditor.args = {
  type: "json",
};
