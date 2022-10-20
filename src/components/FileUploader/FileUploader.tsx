import React, { useCallback, useEffect, useRef, useState } from "react";
import UploadIcon from "../../assets/svg-components/upload-icon";
import XIcon from "../../assets/svg-components/x-icon";

import "./FileUploader.css";

type FileUploaderProps = JSX.IntrinsicElements["div"] & {
  files: File[];
  setFiles: (files: File[]) => void;
  disabled?: boolean;
};

const FileUploader = ({
  files,
  setFiles,
  disabled,
  ...props
}: FileUploaderProps) => {
  const [isDropActive, setIsDropActive] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const dropZoneRef = useRef<null | HTMLDivElement>(null);
  const inputFile = useRef<HTMLInputElement | null>(null);

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const onFilesDrop = useCallback((newFiles: File[]) => {
    setFiles(newFiles);
  }, []);

  const mapFileListToArray = (filesNew: FileList) => {
    const array = [];

    for (let i = 0; i < filesNew?.length; i++) {
      array.push(filesNew.item(i));
    }

    return array;
  };

  const handleDragIn = React.useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.items && event.dataTransfer.items?.length > 0) {
      setIsDragActive(true);
    }
  }, []);

  const handleDragOut = React.useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    setIsDragActive(false);
  }, []);

  const handleDrag = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      if (!isDragActive) {
        setIsDragActive(true);
      }
    },
    [isDragActive]
  );

  const handleDrop = React.useCallback(
    (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      setIsDragActive(false);

      if (event.dataTransfer?.files && event.dataTransfer.files?.length > 0) {
        const files = mapFileListToArray(event.dataTransfer.files) as File[];
        onFilesDrop(files);
        event.dataTransfer.clearData();
      }
    },
    [onFilesDrop]
  );

  useEffect(() => {
    onDragStateChange?.(isDragActive);
  }, [isDragActive]);

  useEffect(() => {
    const tempZoneRef = dropZoneRef?.current;
    if (tempZoneRef && disabled === false) {
      tempZoneRef.addEventListener("dragenter", handleDragIn);
      tempZoneRef.addEventListener("dragleave", handleDragOut);
      tempZoneRef.addEventListener("dragover", handleDrag);
      tempZoneRef.addEventListener("drop", handleDrop);
    }
    return () => {
      tempZoneRef?.removeEventListener("dragenter", handleDragIn);
      tempZoneRef?.removeEventListener("dragleave", handleDragOut);
      tempZoneRef?.removeEventListener("dragover", handleDrag);
      tempZoneRef?.removeEventListener("drop", handleDrop);
    };
  }, [disabled]);

  const handleRemove = (file: File) => {
    const newArray = files.filter((f) => f !== file);
    setFiles(newArray);
  };

  const onButtonClick = () => {
    inputFile?.current?.click();
  };

  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    onFilesDrop([fileObj]);
  };

  return (
    <div
      className={[
        "drop-zone-wrapper",
        isDropActive ? "drop-zone-active" : "",
        disabled ? "drop-zone-disabled" : "",
      ].join(" ")}
      {...props}
    >
      <div
        ref={dropZoneRef}
        onClick={() => {
          if (!disabled) {
            onButtonClick();
          }
        }}
      >
        <input
          style={{ display: "none" }}
          ref={inputFile}
          type="file"
          onChange={handleFileChange}
        />
        <div
          className={`file-uploader-text ${
            disabled && "file-uploader-text-disabled"
          }`}
        >
          Drop your files here
        </div>
        <UploadIcon
          fill={!disabled ? "#2b468a" : "#a1a1a1"}
          className="upload-icon"
        />
      </div>
      <ul className="list-files">
        {files?.map((file: File) => (
          <li key={`${file.name}_${file.lastModified}`}>
            <span className="text-file-span">
              {file.name} ({Math.round(file.size / 1000)}kb)
            </span>
            <span onClick={() => handleRemove(file)}>
              <XIcon fill="#2b468a" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUploader;
