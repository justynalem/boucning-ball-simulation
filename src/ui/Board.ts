import styled from "styled-components";

export const BoardWrapper = styled.div<{ $cols: number }>`
  display: grid;
  z-index: 1;
  max-width: 50%vw;
  grid-template-columns: ${({ $cols }) => `repeat(${$cols}, 30px)`};
  background: linear-gradient(
    -180deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;
