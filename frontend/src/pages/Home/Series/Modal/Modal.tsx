import React, { useState } from "react";

import { CloseButton, ModalContainer, ModalContent, Overlay } from "./style";
import Input from "../../../../components/Input";
import useAddSeries from "../../../../context/AddSeries/useAddSeries";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text1: string;
  text2: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text1, text2 }) => {
  const {addSeries } = useAddSeries();
  const [newReps, setNewReps] = useState("");
  const [newWeight, setNewWeight] = useState<number>(0);

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>{text1}</p>
          <Input type="number" value={newReps} onChange={(e) => setNewReps(e.target.value)}></Input>

          <p>{text2}</p>
          <Input type="number" value={newWeight} onChange={(e) => setNewWeight(Number(e.target.value))}/>
        </ModalContent>
        <CloseButton
          onClick={() => 
            addSeries(newReps, newWeight)
          }
        >
          Fechar
        </CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
