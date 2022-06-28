import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

export default {
  title: "ReactComponentLibrary/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  placeholder: "Select an item",
  values: [
    { id: "1", label: "prova1" },
    { id: "2", label: "prova2" },
    { id: "3", label: "prova1" },
  ],
};
