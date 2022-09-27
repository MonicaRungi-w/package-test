import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Slider from "./Slider";

export default {
  title: "ReactComponentLibrary/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [value, setValue] = useState("0");
  return <Slider {...args} value={value} setValue={setValue} />;
};

export const SliderComponent = Template.bind({});
SliderComponent.args = {};
