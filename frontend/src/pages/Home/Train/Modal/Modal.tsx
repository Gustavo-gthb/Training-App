import React from "react";

import { CloseButton, ModalContent, Overlay } from "./style";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
