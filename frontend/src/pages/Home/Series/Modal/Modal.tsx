import React, { useState } from "react";

import {
  AddButton,
  DoneButton,
  ModalContainer,
  ModalContent,
  Overlay,
} from "./style";
import Input from "../../../../components/Input";
import useAddSeries from "../../../../context/AddSeries/useAddSeries";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text1: string;
  text2: string;
  exerciseName: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  text1,
  text2,
  exerciseName, 
}) => {
  const { addSeries } = useAddSeries();
  const [newReps, setNewReps] = useState("");
  const [newWeight, setNewWeight] = useState("");

  const handleAddSeries = () => {
    if (!exerciseName) return;
    addSeries(exerciseName, newReps, newWeight);
    setNewReps("");
    setNewWeight("");
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalContent >
          <p>{text1}</p>
          <Input
            type="number"
            value={newReps}
            onChange={(e) => setNewReps(e.target.value)}
          ></Input>

          <p>{text2}</p>
          <Input
            type="number"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
          />
        </ModalContent>
        <AddButton onClick={handleAddSeries}>adicionar</AddButton>
        <DoneButton onClick={onClose}>concluido</DoneButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
