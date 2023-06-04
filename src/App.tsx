import { useBouncingBall } from "./hooks/useBouncingBall";
import { initialBoard } from "./constants";
import {
  BoardWrapper,
  Block,
  Ball,
  Wall,
  Opponent,
  Container,
  Button,
  ButtonWrapper,
} from "./ui";
import { CellValue } from "./types";

function renderBlock(cellValue: CellValue, key: string) {
  if (cellValue === "0") {
    return <Block key={key} />;
  }

  if (cellValue === "1") {
    return (
      <Block key={key}>
        <Ball />
      </Block>
    );
  }

  if (cellValue === "X") {
    return <Wall key={key} />;
  }

  if (cellValue === "Y") {
    return (
      <Block key={key}>
        <Opponent key={key} />{" "}
      </Block>
    );
  }
}

function App() {
  const { board, start, stop, started } = useBouncingBall(initialBoard);

  const printBoard = board.map((rows, r) =>
    rows.map((_, c) => renderBlock(board[r][c], `${r}-${c}`))
  );

  return (
    <Container>
      <BoardWrapper $cols={board[0].length}>{printBoard}</BoardWrapper>
      <ButtonWrapper>
        <Button disabled={started} onClick={start}>Start</Button>
        <Button disabled={!started} onClick={stop}>Stop</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default App;
