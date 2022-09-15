import React, { useEffect, useState } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";

export interface JSONEditorProps {
  value: any;
  onChange: (data: any) => void;
}

const JSONEditor = ({ value, onChange, ...props }: JSONEditorProps) => {
  const [json, setJson] = useState(JSON.stringify(value, null, 2));

  const handleEditorChange = (value: any) => {
    setJson(value);
    onChange(value);
  };

  return (
    <>
      <div className="json-editor-wrapper">
        <Editor
          height="90vh"
          defaultLanguage="json"
          defaultValue={json}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      </div>
    </>
  );
};

export default JSONEditor;
