import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(137px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    transform: translateY(80px);
    color: #c8c8c8;
  }
`;

export const SeriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 5px;

  color: #c8c8c8;
`;

export const DeleteContainer = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: ${({ isSelected }) => (isSelected ? "2px solid #0325D0" : "none")};
  transition: border 1s ease-in-out;
  width: 278px;
  height: 70px;
  border-radius: 8px;
`;

export const RepsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const WeightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const InputSeries = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border-style: none;
  border: 1px solid #000000;
  border-radius: 8px;
  width: 54px;
  height: 46px;
  background-color: #dda14d;
  color: #000000;
`;

export const DeleteButton = styled.button<{ isSelected?: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  border-style: none;
  color: #c8c8c8;
  border-radius: 100px;
  background-color: #0325d0;

  opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
  transform: translateY(137px);

  width: 149px;
  height: 35px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      animation: ${fadeIn} 0.5s ease-in-out;
    `}
`;

export const AddSerie = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-style: none;
  color: #c8c8c8;
  border-radius: 100px;
  background-color: #0325d0;

  transform: translateY(150px);
  width: 149px;
  height: 35px;
`;
