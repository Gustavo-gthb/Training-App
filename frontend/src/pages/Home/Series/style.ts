import styled from "styled-components";

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

  color: #C8C8C8;
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
  background-color: #DDA14D;
  color: #000000;
`;


