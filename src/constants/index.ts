import { AllDirections, Board, Coordinates } from "../types";

export const initialBoard: Board = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
];

export const directions: Record<AllDirections, Coordinates> = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0],
  leftUp: [-1, -1],
  leftDown: [1, -1],
  rightUp: [-1, 1],
  rightDown: [1, 1],
};

export const possibleNewDirections: Record<AllDirections, Coordinates[]> = {
  left: [directions.right],
  right: [directions.left],
  up: [directions.down],
  down: [directions.up],
  leftUp: [directions.rightUp, directions.leftDown, directions.rightDown],
  leftDown: [directions.rightDown, directions.leftUp, directions.rightUp],
  rightUp: [directions.leftUp, directions.rightDown, directions.leftDown],
  rightDown: [directions.leftDown, directions.rightUp, directions.leftUp],
};
