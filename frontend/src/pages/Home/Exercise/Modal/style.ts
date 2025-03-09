import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
    backdrop-filter: blur(0px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(12px);
  }

`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(12px)" : "blur(0px)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 1s ease-in-out;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: 1px solid #f9e0e0;
  width: 292px;
  height: 322px;
  z-index: 1001;

  p {
    transform: translateY(-30px);
  }
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  background: crimson;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`;
