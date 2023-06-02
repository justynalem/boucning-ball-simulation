import { useCallback, useEffect, useRef, useState } from "react";
import { Board, Coordinates } from "../types";
import { getInitialBallPosition, getRandomDirection } from "../utils";

export const useBouncingBall = (initialBoard: Board) => {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [current, setCurrent] = useState<Coordinates>(getInitialBallPosition(board));
  const direction = useRef<Coordinates>(getRandomDirection());

  const applyNewCurrent = useCallback(() => {
    const [directionRow, directionCol] = direction.current;
    const [currentRow, currentCol] = current;

    const futureRow = currentRow + directionRow;
    const futureCol = currentCol + directionCol;
    const cellValue = board[futureRow][futureCol];

    if (cellValue === '0') {
      setBoard(board => {
        board[futureRow][futureCol] = '1';
        board[currentRow][currentCol] = '0';
        return [...board];
      });

      return setCurrent([futureRow, futureCol]);
    }

    if (cellValue === 'X') {
      direction.current = getRandomDirection();
      return applyNewCurrent();
    }

    if (cellValue === 'Y') {
      setBoard(board => {
        board[futureRow][futureCol] = '0';
        return [...board];
      });

      direction.current = getRandomDirection();
      return applyNewCurrent();
    }

  }, [board, current]);

  useEffect(() => {
    setTimeout(applyNewCurrent, 500);
  }, [current, applyNewCurrent]);

  return board;
};
