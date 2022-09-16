import Editor from "@monaco-editor/react";
import React from "react";

import "../common.css";
import "./CodeEditor.css";

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
