import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: none;

  border: 1px solid #000000;
  background-color: #dda14d;
  border-radius: 8px;
  color: #000000;

  width: 231px;
  height: 46px;

  margin-top: 20px;

  p {
    padding-left: 15px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 15px;
`;
