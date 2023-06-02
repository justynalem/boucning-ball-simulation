import { useBouncingBall } from './hooks/useBouncingBall';
import { initialBoard } from './constants';

function App() {
  const board = useBouncingBall(initialBoard);

  const printBoard = board.map((rows, r) =>
    rows.map((_, c) => (
      <div
        key={`${r}-${c}`}
        style={{
          width: 30,
          height: 30,
          backgroundColor:
            board[r][c] === "X"
              ? "red"
              : board[r][c] === "Y"
                ? "blue"
                : board[r][c] === "0"
                  ? "white"
                  : board[r][c] === "1"
                    ? "black"
                    : "white",
          border: "1px solid black",
        }}></div>
    ))
  );

  return (
    <div
      style={{
        display: "grid",
      }}>
      <div
        style={{
          maxWidth: "360px",
          display: "grid",
          gridTemplateColumns: `repeat(${board[0].length}, 30px)`,
        }}>
        {printBoard}
      </div>
    </div>
  );
}

export default App;
