import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Progress from "./Progress";

export default {
  title: "ReactComponentLibrary/Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setvalue((oldValue) => {
        const newValue = oldValue + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);
  return <Progress {...args} percent={value} />;
};

export const ProgressComponent = Template.bind({});
ProgressComponent.args = {};
