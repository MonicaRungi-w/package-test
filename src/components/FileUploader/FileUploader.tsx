import React, { useCallback, useEffect, useRef, useState } from "react";
import UploadIcon from "../../assets/svg-components/upload-icon";
import XIcon from "../../assets/svg-components/x-icon";

import "./FileUploader.css";

export interface FileUploaderProps {
  files: File[];
  setFiles: (files: File[]) => void;
}

const FileUploader = ({ files, setFiles }: FileUploaderProps) => {
  const [isDropActive, setIsDropActive] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const dropZoneRef = useRef<null | HTMLDivElement>(null);

  const onDragStateChange = useCallback((dragActive: boolean) => {
    setIsDropActive(dragActive);
  }, []);

  const onFilesDrop = useCallback((newFiles: File[]) => {
    const array = [...files, ...newFiles];
    setFiles(array);
  }, []);

  const mapFileListToArray = (filesNew: FileList) => {
    const array = [];

    for (let i = 0; i < filesNew.length; i++) {
      array.push(filesNew.item(i));
    }

    return array;
  };

  const handleDragIn = React.useCallback((event: DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer?.items && event.dataTransfer.items.length > 0) {
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

      if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
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
    if (tempZoneRef) {
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
  }, []);

  const handleRemove = (file: File) => {
    const newArray = files.filter((f) => f !== file);
    setFiles(newArray);
  };

  return (
    <div
      className={[
        "drop-zone-wrapper",
        isDropActive ? "drop-zone-active" : "",
      ].join(" ")}
    >
      <div ref={dropZoneRef}>
        <div className="file-uploader-text">Drop your files here</div>
        <UploadIcon fill="#2b468a" className="upload-icon" />
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
