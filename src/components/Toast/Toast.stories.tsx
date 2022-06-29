import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toast, { ErrorType } from "./Toast";

export default {
  title: "ReactComponentLibrary/Toast",
  component: Toast,
};

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const InfoComponent = Template.bind({});
InfoComponent.args = {
  title: "Info Toast",
  description: "This is an info Toast",
  type: ErrorType.info,
};

export const ErrorComponent = Template.bind({});
ErrorComponent.args = {
  title: "Error Toast",
  description: "This is an error Toast",
  type: ErrorType.error,
};

export const WarningComponent = Template.bind({});
WarningComponent.args = {
  title: "Warning Toast",
  description: "This is an warning Toast",
  type: ErrorType.warning,
};

export const SuccessComponent = Template.bind({});
SuccessComponent.args = {
  title: "Success Toast",
  description: "This is an success Toast",
  type: ErrorType.success,
};
