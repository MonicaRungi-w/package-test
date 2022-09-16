import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "./Checkbox";

export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false);

  return (
    <Checkbox
      {...args}
      checked={value}
      setChecked={(e: boolean) => setValue(e)}
    />
  );
};

export const Enabled = Template.bind({});
Enabled.args = {
  label: "Enabled Checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Checkbox",
  disable: true,
};
