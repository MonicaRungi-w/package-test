import React, { PropsWithChildren, ReactNode } from "react";
import ReactPortal from "./ReactPortal";

import "./../common.css";
import "./Modal.css";
import ModalContent from "./ModalContent";

export interface ModalProps extends PropsWithChildren {
  open: boolean;
  setOpen: (b: boolean) => void;
  onSubmit: () => void;
  title: ReactNode;
  content: ReactNode;
}

const Modal = ({
  open,
  title,
  content,
  setOpen,
  onSubmit,
  ...props
}: ModalProps) => {
  return open
    ? ReactPortal(
        <div className="wrapper">
          <div>
            <ModalContent
              title={title}
              setOpen={setOpen}
              onSubmit={onSubmit}
              content={content}
              {...props}
            />
          </div>
        </div>,
        "root"
      )
    : null;
};

export default Modal;
