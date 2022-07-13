import React, { PropsWithChildren, ReactNode } from "react";
import ModalContent from "./ModalContent";

import "./../common.css";
import "./Modal.css";
import ReactPortal from "./ReactPortal";

type ModalProps = JSX.IntrinsicElements["div"] & {
  open: boolean;
  setOpen: (b: boolean) => void;
  onSubmit: () => void;
  title: ReactNode;
  content: ReactNode;
};

const Modal = ({
  open,
  title,
  content,
  setOpen,
  onSubmit,
  ...props
}: ModalProps) => {
  return (
    <div>
      {open
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
        : null}
    </div>
  );
};

export default Modal;
