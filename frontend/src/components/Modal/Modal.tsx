import React from "react";

import { CloseButton, ModalContainer, ModalContent, Overlay } from "./style";
import Rectangle from "../Rectangle";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  text: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, text }) => {

  

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>{text}</p>
          <Rectangle>aaaa</Rectangle>
        </ModalContent>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
