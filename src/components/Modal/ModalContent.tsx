import React, { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import XIcon from "../../assets/svg-components/x-icon";

import Button from "../Button";

import "./../common.css";
import "./Modal.css";

type ModalProps = JSX.IntrinsicElements["div"] & {
  title: ReactNode;
  content: ReactNode;
  setOpen: (b: boolean) => void;
  onSubmit: () => void;
};

const ModalContent = ({
  title,
  content,
  setOpen,
  onSubmit,
  ...props
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return (
    <div
      ref={ref}
      id="modal-content"
      {...props}
      className={["modal-content", props.className].join(" ")}
    >
      <XIcon
        className="close-icon"
        fill="#2b468a"
        onClick={() => setOpen(false)}
      />
      <div className="header">
        <div className="title">{title}</div>
      </div>

      <div className="wrapper-content">
        <div className="content">{content}</div>
        <div className="button-container">
          <Button variant="primary" onClick={onSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
