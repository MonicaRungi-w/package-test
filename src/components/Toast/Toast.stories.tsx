import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toast, { ErrorType, PositionType } from "./Toast";
import { TestImage } from "../../assets";

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
      type: ErrorType.info,
    },
  ],
  position: PositionType.bottomLeft,
  autoDelete: true,
};

export const ErrorComponent = Template.bind({});
ErrorComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Error Toast",
      description: "This is an error Toast",
      type: ErrorType.error,
    },
  ],
  position: PositionType.bottomRight,
  autoDelete: true,
};

export const WarningComponent = Template.bind({});
WarningComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Warning Toast",
      description: "This is a warning Toast",
      type: ErrorType.warning,
    },
  ],
  position: PositionType.topLeft,
  autoDelete: true,
};

export const SuccessComponent = Template.bind({});
SuccessComponent.args = {
  toastList: [
    {
      id: "1",
      title: "Success Toast",
      description: "This is a success Toast",
      type: ErrorType.success,
    },
  ],
  position: PositionType.topRight,
  autoDelete: true,
};

export const MultipleToast = Template.bind({});
MultipleToast.args = {
  toastList: [
    {
      id: "1",
      title: "Success Toast",
      description: "This is a success Toast",
      type: ErrorType.success,
    },
    {
      id: "2",
      title: "Generic Toast",
      description: "This is a generic Toast",
      backgroundColor: "rgba(153, 2, 216, 0.43)",
      textColor: "rgba(153, 2, 216, 1)",
      icon: TestImage,
    },
    {
      id: "3",
      title: "Another Generic Toast",
      description: "This is another generic Toast",
      backgroundColor: "rgba(1, 2, 216, 0.43)",
      textColor: "rgba(1, 2, 216, 1)",
      icon: TestImage,
    },
  ],
  position: PositionType.bottomRight,
  autoDelete: true,
};
