import { Board, Coordinates } from "../types";
import {possibleMoves} from '../constants'

export function getInitialBallPosition(board: Board): Coordinates {
  const ballPos = [];
  for (const [rowIndex, column] of board.entries()) {
    const columnIndex = column.findIndex(cell => cell === "1");
    if (columnIndex !== -1) {
      ballPos.push(rowIndex, columnIndex);
      break;
    }
  }
  const [row, col] = ballPos;

  return [row, col];
}

export function getRandomDirection(moves: Coordinates[] = possibleMoves) {
  return moves[Math.floor(Math.random() * moves.length)];
}