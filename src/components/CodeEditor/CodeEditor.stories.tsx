import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CodeEditor from "./CodeEditor";

export default {
  title: "ReactComponentLibrary/CodeEditor",
  component: CodeEditor,
} as ComponentMeta<typeof CodeEditor>;

const Template: ComponentStory<typeof CodeEditor> = (args) => {
  const [value, setValue] = useState<string | undefined>("");

  return <CodeEditor {...args} value={value} onChange={setValue} />;
};

export const CodeEditorComponent = Template.bind({});
CodeEditorComponent.args = {
  theme: "vs-dark",
  language: "json",
  disabled: true,
};
