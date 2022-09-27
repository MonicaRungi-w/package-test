import React from "react";
import Editor, { EditorProps } from "@monaco-editor/react";

export interface JSONEditorProps {
  value: any;
  onChange: (data: any) => void;
  theme?: "vs-dark" | "light";
  language: string;
}

const JSONEditor = ({
  theme = "light",
  language,
  value,
  onChange,
  ...props
}: JSONEditorProps) => {
  return (
    <>
      <div className="json-editor-wrapper">
        <Editor
          height="90vh"
          {...props}
          defaultLanguage={language}
          theme={theme}
          defaultValue={
            value ? JSON.stringify(value, null, 2) : "//insert code here"
          }
          onChange={(value) => onChange(value)}
        />
      </div>
    </>
  );
};

export default JSONEditor;
