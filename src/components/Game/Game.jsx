import * as S from "./styled";
import {
  revealChain,
  initializeArray2D,
  revealAll,
  changeFlag,
  isWon,
} from "../../utils";
import { useEffect, useState } from "react";

const Game = () => {
  const [dimension, setDimension] = useState({
    width: 20,
    height: 20,
    mines: 30,
  });

  const [array2D, setArray2D] = useState(() => initializeArray2D(dimension));
  const [flag, setFlag] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const [totalReveal, setTotalReveal] = useState({ total: 0 });
  const [gameWon, setGameWon] = useState(false);

  const startNewGame = () => {
    setArray2D(initializeArray2D(dimension));
    setFlag(false);
    setIsGameOver(false);
    setTotalReveal({ total: 0 });
    setGameWon(false);
  };

  const handleClick = (col) => {
    if (flag) {
      setArray2D([...changeFlag(array2D, col.x, col.y)]);
      setFlag(false);
    } else {
      if (col.isFlagged) return;

      if (col.isMine) {
        setArray2D([...revealAll(array2D)]);
        setIsGameOver(true);
        alert("You're loser");
      } else {
        setArray2D([
          ...revealChain(array2D, dimension, col.x, col.y, totalReveal),
        ]);
        setTotalReveal(totalReveal);
      }
    }
  };

  useEffect(() => {
    setGameWon(isWon(dimension, totalReveal));
    console.log(totalReveal.total);
  }, [totalReveal.total]);

  useEffect(() => {
    if (gameWon) {
      alert("You're winner");
    }
  }, [gameWon]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.GridSystem width={dimension.width} height={dimension.height}>
          {array2D.map((row, indexW) => {
            return row.map((column, indexH) => {
              return (
                <S.Cell
                  onClick={() => handleClick(column)}
                  isEmpty={column.isEmpty && !column.isMine}
                  isRevealed={column.isRevealed}
                  data-dimension={`${indexW}-${indexH}`}
                  key={`${indexW}-${indexH}`}
                >
                  {isGameOver && column.isMine
                    ? "💣"
                    : column.isRevealed
                    ? column.isMine
                      ? "💣"
                      : `${column.neighbors || ""}`
                    : column.isFlagged
                    ? "🚩"
                    : ""}
                </S.Cell>
              );
            });
          })}
        </S.GridSystem>
      </S.Wrapper>
      <S.ButtonContainer>
        <S.Button onClick={startNewGame}>Restart</S.Button>
        <S.Button picked={flag} onClick={() => setFlag((prev) => !prev)}>
          Flag
        </S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default Game;
