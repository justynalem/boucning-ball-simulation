import { useCallback, useEffect, useRef, useState } from "react";
import { Board, Coordinates } from "../types";
import {
  getInitialBallPosition,
  getNewDirection,
  getRandomDirection,
} from "../utils";

export const useBouncingBall = (initialBoard: Board) => {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [current, setCurrent] = useState<Coordinates>(
    getInitialBallPosition(board)
  );
  const [started, setStarted] = useState(false);
  const direction = useRef<Coordinates>(getRandomDirection());

  const applyNewCurrent = useCallback(() => {
    const [directionRow, directionCol] = direction.current;
    const [currentRow, currentCol] = current;

    const futureRow = currentRow + directionRow;
    const futureCol = currentCol + directionCol;
    const cellValue = board[futureRow][futureCol];

    if (cellValue === "0") {
      setBoard(board => {
        board[futureRow][futureCol] = "1";
        board[currentRow][currentCol] = "0";
        return [...board];
      });
      
      return setCurrent([futureRow, futureCol]);
    }

    if (cellValue === "X") {
      direction.current = getNewDirection(direction.current, current, board);
      return applyNewCurrent();
    }

    if (cellValue === "Y") {
      setBoard(board => {
        board[futureRow][futureCol] = "X";
        return [...board];
      });

      direction.current = getNewDirection(direction.current, current, board);
      return applyNewCurrent();
    }
  }, [board, current]);

  useEffect(() => {
    if (started){
      setTimeout(applyNewCurrent, 80);
    }
  }, [current, started, applyNewCurrent]);

  const start = useCallback(() => {
    setStarted(true);
  }, [setStarted]);

  const stop = useCallback(() => {
    setStarted(false);
  }, [setStarted]);

  return { board, start, stop, started };
};
