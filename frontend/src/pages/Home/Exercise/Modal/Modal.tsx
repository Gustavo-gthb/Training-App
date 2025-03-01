import React from "react";

import { CloseButton, ModalContainer, ModalContent, Overlay } from "./style";
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
  const { inputValueExercise, handleChange } = useCreateExercise();
  const { addExercise } = useAddExercise();

  const handleAddExercise = () => {
    if (!trainingName || !inputValueExercise.trim()) return;
    addExercise(trainingName, inputValueExercise);
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>{text}</p>
          <Input
            type="text"
            value={inputValueExercise}
            onChange={handleChange}
          ></Input>
        </ModalContent>
        <CloseButton onClick={handleAddExercise}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
