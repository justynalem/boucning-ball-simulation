import { AllDirections, Board, Coordinates } from "../types";
import { directions, possibleNewDirections } from "../constants";

export function getDirectionNameFromCurrentMove(
  [currentMovementRow, currentMovementCol]: Coordinates,
  allDirections = directions
): AllDirections {
  for (const [direction, [row, col]] of Object.entries(allDirections)) {
    if (row === currentMovementRow && col === currentMovementCol) {
      return direction as AllDirections;
    }
  }
  throw new Error("Direction not found");
}

export function getNewDirection(
  direction: Coordinates,
  [currentRow, currentCol]: Coordinates,
  board: Board
) {
  const currentDirection = getDirectionNameFromCurrentMove(direction);
  const newMove = possibleNewDirections[currentDirection].find(([row, col]) => {
    const newRow = currentRow + row;
    const newCol = currentCol + col;
    const newValue = board[newRow][newCol];
    return newValue !== "X";
  });

  if (!newMove) {
    throw new Error("No move possible");
  }
  return newMove;
}

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

export function getRandomDirection(): Coordinates {
  const moves = [
    directions.leftDown,
    directions.leftUp,
    directions.rightDown,
    directions.rightUp,
  ];
  return moves[Math.floor(Math.random() * moves.length)];
}
