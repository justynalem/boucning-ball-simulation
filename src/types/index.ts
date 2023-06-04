export type CellValue = '0' | '1' | 'X' | 'Y'
export type Board = CellValue[][];
export type Coordinates = [row: number, col: number];
export type AllDirections = "left" | "right" | "up"| "down" | "leftUp" | "leftDown"| "rightUp"| "rightDown"
