import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border: 1px solid #000000;
  background-color: #322f2f;
  border-radius: 8px;

  width: 292px;
  height: 322px;
  max-height: 322px;
  overflow-y: auto;
  overflow-x: hidden;

  gap: 20px;

  transform: translateY(100px);
`;
