import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Skeleton from "./Skeleton";

export default {
  title: "ReactComponentLibrary/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
  return <Skeleton {...args} />;
};

export const Avatar = Template.bind({});
Avatar.args = {
  type: "avatar",
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  type: "thumbnail",
};

export const Title = Template.bind({});
Title.args = {
  type: "title",
};

export const Text = Template.bind({});
Text.args = {
  type: "text",
};

const FullSkeletonGroup: ComponentStory<typeof Skeleton> = (args) => {
  return (
    <div
      style={{
        width: "500px",
        boxShadow: "0px 15px 20px -15px var(--grey1)",
        border: "1px solid var(--grey0)",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <Skeleton {...args} type="avatar" />
      <Skeleton {...args} type="title" />
      <Skeleton {...args} type="text" />
      <Skeleton {...args} type="text" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Skeleton {...args} type="thumbnail" />
        <Skeleton {...args} type="thumbnail" />
        <Skeleton {...args} type="thumbnail" />
        <Skeleton {...args} type="thumbnail" />
      </div>
    </div>
  );
};
export const FullSkeletonGroupComponent = FullSkeletonGroup.bind({});
FullSkeletonGroupComponent.args = {};
