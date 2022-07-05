import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Loader from "./Loader";

export default {
  title: "ReactComponentLibrary/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => {
  return <Loader {...args} />;
};

const OverlayTemplate: ComponentStory<typeof Loader> = (args) => {
  return (
    <>
      <Loader {...args} /> <div style={{color: "red"}}>test overlay</div>
    </>
  );
};

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {};

export const LoaderOverlayComponent = OverlayTemplate.bind({});
LoaderOverlayComponent.args = {
  overlay: true,
};
