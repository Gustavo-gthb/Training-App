import styled from "styled-components";

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  /* background-color: white;
  padding: 20px;
  border-radius: 10px;
  min-width: 300px;
  max-width: 500px;
  text-align: center; 
  width: 100%; */
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
