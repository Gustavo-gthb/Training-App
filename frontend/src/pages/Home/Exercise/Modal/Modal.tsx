import React from "react";

import {
  AddButton,
  DoneButton,
  ModalContainer,
  ModalContent,
  Overlay,
} from "./style";
import Input from "../../../../components/Input";
import useCreateExercise from "../../../../context/CreateExercise/useCreateExercise";
import useAddExercise from "../../../../context/AddExercise/useAddExercise";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
  trainingName: string | undefined;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  text,
  trainingName,
}) => {
  const { inputValueExercise, handleChange, clearInput } = useCreateExercise();
  const { addExercise } = useAddExercise();

  const handleAddExercise = () => {
    if (!trainingName || !inputValueExercise.trim()) return;
    addExercise(trainingName, inputValueExercise);
    clearInput()
    
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent>
          <p>{text}</p>
          <Input value={inputValueExercise} onChange={handleChange} />
        </ModalContent>
        <AddButton onClick={handleAddExercise}>adicionar</AddButton>
        <DoneButton onClick={onClose}>concluido</DoneButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
