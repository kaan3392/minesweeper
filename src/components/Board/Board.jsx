import * as S from "./styled";
import { levels } from "./constant";
import { useContext, useEffect, useRef, useState } from "react";
import { context } from "../../context";
import { useNavigate } from "react-router-dom";

const Board = () => {
  const { dispatch } = useContext(context);
  const navigate = useNavigate();
  const [level, setLevel] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);

  const slideRef = useRef(null);
  const slideContainerRef = useRef(null);

  const pickLevel = (direction) => {
    if (direction === "right") {
      setLevel(level < levels.length - 1 ? (prev) => prev + 1 : 0);
    } else {
      setLevel(level > 0 ? (prev) => prev - 1 : levels.length - 1);
    }
  };

  useEffect(() => {
    if (!slideRef.current) {
      return;
    }
    setSlideWidth(slideRef.current.clientWidth);
    if (!slideContainerRef.current) {
      return;
    }
    slideContainerRef.current.style.transform = `translateX(${
      -slideWidth * level
    }px)`;
  }, [level, slideWidth]);

  const startNewGame = () => {
    const { name } = levels.find((item) => item.id === level);
    dispatch({ type: name });
    navigate("/game");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>💣</S.Title>
        <S.ArrowContainer>
          <S.Arrow onClick={() => pickLevel("left")}>⬅</S.Arrow>
          <S.PickedLevel>
            <S.LevelContainer ref={slideContainerRef}>
              {levels.map((level) => (
                <S.Level ref={slideRef} key={level.id}>
                  {level.name}
                </S.Level>
              ))}
            </S.LevelContainer>
          </S.PickedLevel>
          <S.Arrow onClick={() => pickLevel("right")}>➡</S.Arrow>
        </S.ArrowContainer>

        <S.NewGame onClick={startNewGame}>New Game</S.NewGame>
      </S.Wrapper>
    </S.Container>
  );
};

export default Board;
