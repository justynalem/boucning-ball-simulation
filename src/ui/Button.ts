import styled from "styled-components";

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #fff;
  border: "1px solid black";
  cursor: pointer;
  &:hover:not(&:disabled) {
    background-color: #000;
    color: #fff;
  }
  &:disabled {
    cursor: unset;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 48px;
  margin-top: 16px;
`;
