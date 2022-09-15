import React, { useState } from "react";

export interface FileUploaderProps {}

const FileUploader = ({}: FileUploaderProps) => {
  return (
    <div>
      <input
        type={"file"}
        //className="file-uploader"
        placeholder={""}
        value={""}
        onChange={(e) => {}}
      />
    </div>
  );
};

export default FileUploader;
