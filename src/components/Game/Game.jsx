import * as S from "./styled";
import {
  revealChain,
  initializeArray2D,
  revealAll,
  changeFlag,
  isWon,
} from "../../utils";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context";
import Modal from "../Modal/Modal";

const Game = () => {
  const {
    state: { mines },
  } = useContext(context);

  const dimension = {
    width: 15,
    height: 15,
    mines,
  };
  const [array2D, setArray2D] = useState(() => initializeArray2D(dimension));
  const [flag, setFlag] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [totalReveal, setTotalReveal] = useState({ total: 0 });
  const [gameWon, setGameWon] = useState(null);

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
  }, [totalReveal.total]);


  return (
    <S.Container>
      <S.Wrapper>
        <S.TitleContainer>
          <S.Title>
            Level: {mines === 30 ? "Easy" : mines === 50 ? "Medium" : "Hard"}
          </S.Title>
          <S.Title>💣: {mines}</S.Title>
        </S.TitleContainer>
        <Modal
          startNewGame={startNewGame}
          isWon={gameWon}
          isGameOver={isGameOver}
        />
        <S.GridWrapper>
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
        </S.GridWrapper>
        <S.ButtonContainer>
          <S.Button onClick={startNewGame}>Restart</S.Button>
          <S.Button picked={flag} onClick={() => setFlag((prev) => !prev)}>
            Flag
          </S.Button>
          <S.BoardPage to="/">Board</S.BoardPage>
        </S.ButtonContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default Game;
