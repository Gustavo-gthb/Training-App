import React from "react";

import { CloseButton, ModalContainer, ModalContent, Overlay } from "./style";
import Input from "../../../../components/Input";
import useCreateSerie from "../../../../context/CreateSeries/useCreateSerie";
import useAddSeries from "../../../../context/AddSeries/useAddSeries";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {
  const { inputValueSeries, handleChange } = useCreateSerie();
  const { addSeries } = useAddSeries();

  const handleAddSerie = () => {
    if (inputValueSeries.trim()) {
      addSeries(inputValueSeries); 
    }
  };

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>{text}</p>
          <Input value={inputValueSeries} onChange={handleChange}></Input>
        </ModalContent>
        <CloseButton
          onClick={() => {
            handleAddSerie();
            onClose();
          }}
        >
          Fechar
        </CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
