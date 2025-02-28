import React from "react";

import { CloseButton, ModalContainer, ModalContent, Overlay } from "./style";
import Input from "../../../../components/Input";
import useCreateExercise from "../../../../context/CreateExercise/useCreateExercise";
import useAddExercise from "../../../../context/AddExercise/useAddExercise";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
}; 

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {
  const { inputValueExercise, handleChange } = useCreateExercise();
  const {addExercise} = useAddExercise();

  const handleAddExercise = () => {
    if (inputValueExercise.trim()) {
      addExercise(inputValueExercise);
    }
  };
  
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>{text}</p>
          <Input value={inputValueExercise} onChange={handleChange}></Input>
        </ModalContent>
        <CloseButton onClick={() => {
          handleAddExercise();
          onClose();
        }}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

