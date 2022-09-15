import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FileUploader from "./FileUploader";

export default {
  title: "ReactComponentLibrary/FileUploader",
  component: FileUploader,
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => {
  const [files, setFiles] = useState<File[]>([]);
  return <FileUploader {...args} files={files} setFiles={setFiles} />;
};

export const FileUploaderComponent = Template.bind({});
