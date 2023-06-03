import styled from "styled-components";

export const BoardWrapper = styled.div<{ $cols: number }>`
  display: grid;
  z-index: 1;
  max-width: 50%vw;
  grid-template-columns: ${({ $cols }) => `repeat(${$cols}, 30px)`};
  /* background: linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147)); */
  /* background-color: transparent; */
  background: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);
`;
