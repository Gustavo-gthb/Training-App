import React from "react";

import { CloseButton, ModalContainer, ModalContent, Overlay } from "./style";
import Input from "../../../../components/Input";
import useCreateTraining from "../../../../context/CreateTraining/useCreateTraining";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {
  const { inputValueTraining, handleChange } = useCreateTraining();
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>{text}</p>
          <Input value={inputValueTraining} onChange={handleChange}></Input>
        </ModalContent>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
