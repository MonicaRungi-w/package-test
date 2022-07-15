import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toast from "./Toast";
import testImage from "../../assets/svg-file/test-image.svg";

export default {
  title: "ReactComponentLibrary/Toast",
  component: Toast,
};

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const InfoComponent = Template.bind({});
InfoComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Info Toast",
      description: "This is an info Toast",
      type: "info",
    },
  ],
  position: "bottom-left",
  autoDelete: false,
};

export const ErrorComponent = Template.bind({});
ErrorComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Error Toast",
      description: "This is an error Toast",
      type: "error",
    },
  ],
  position: "bottom-right",
  autoDelete: true,
};

export const WarningComponent = Template.bind({});
WarningComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Warning Toast",
      description: "This is a warning Toast",
      type: "warning",
    },
  ],
  position: "top-left",
  autoDelete: true,
};

export const SuccessComponent = Template.bind({});
SuccessComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Success Toast",
      description: "This is a success Toast",
      type: "success",
    },
  ],
  position: "top-right",
  autoDelete: true,
};

export const MultipleToast = Template.bind({});
MultipleToast.args = {
  toastList: [
    {
      id: "1",
      title: "Success Toast",
      description: "This is a success Toast",
      type: "success",
    },
    {
      id: "2",
      title: "Generic Toast",
      description: "This is a generic Toast",
      backgroundColor: "rgba(153, 2, 216, 0.43)",
      textColor: "rgba(153, 2, 216, 1)",
      icon: testImage,
    },
    {
      id: "3",
      title: "Another Generic Toast",
      description: "This is another generic Toast",
      backgroundColor: "rgba(1, 2, 216, 0.43)",
      textColor: "rgba(1, 2, 216, 1)",
      icon: testImage,
    },
  ],
  position: "bottom-right",
  autoDelete: true,
};
