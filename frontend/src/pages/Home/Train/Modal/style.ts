import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
    backdrop-filter: blur(0px);
  }

  to {
    opacity: 1;
    transform: translateY(20);
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

  transform: translateY(50px);
`;


export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #322F2F;
  color: #C8C8C8;
  border: 1px solid #000000;
  width: 292px;
  height: 322px;
  border-radius: 8px;
  z-index: 1001;

  p {
    transform: translateY(-70px);
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none;
  color: #c8c8c8;
  border-radius: 100px;
  background-color: #0325d0;

  width: 149px;
  height: 35px;
  z-index: 1001;

  transform: translateY(30px);
`;

export const DoneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none;
  color: #c8c8c8;
  border-radius: 100px;
  background-color: #0325d0;

  width: 149px;
  height: 35px;
  z-index: 1001;

  transform: translateY(50px);
`;
