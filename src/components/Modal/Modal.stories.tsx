import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import ModalContent from "./ModalContent";

export default {
  title: "ReactComponentLibrary/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setOpenModal(true)}>open modal</button>
      <Modal {...args} open={openModal} setOpen={setOpenModal}></Modal>
    </>
  );
};

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  title: "Prova Modale",
  content: (
    <div style={{ backgroundColor: "red", height: "400px" }}>
      <div>test</div>
      <div style={{ marginTop: "200px" }}>test</div>
    </div>
  ),
  onSubmit: () => console.log("submit action"),
};
