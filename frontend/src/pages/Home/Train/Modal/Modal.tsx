import React from "react";

import {
  AddButton,
  DoneButton,
  ModalContainer,
  ModalContent,
  Overlay,
} from "./style";
import Input from "../../../../components/Input";
import useCreateTraining from "../../../../context/CreateTraining/useCreateTraining";
import useAddTraining from "../../../../context/AddTraining/useAddTraining";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {
  const { inputValueTraining, handleChange, clearInput } = useCreateTraining();
  const { addTraining } = useAddTraining();

  const handleAddTraining = () => {
    if (inputValueTraining.trim()) {
      addTraining(inputValueTraining);
      clearInput();
    }
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <p>{text}</p>
          <Input value={inputValueTraining} onChange={handleChange} />
        </ModalContent>
        <AddButton onClick={handleAddTraining}>adicionar</AddButton>
        <DoneButton onClick={onClose}>concluido</DoneButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
