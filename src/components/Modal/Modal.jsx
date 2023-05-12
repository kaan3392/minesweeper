import * as S from "./styled";

const Modal = ({ isWon, startNewGame, isGameOver }) => {
  return (
    <S.Modal isWon={isWon} isGameOver={isGameOver}>
      <S.Container>
        {isWon && <S.Text>Congratulations! You Won 🎉🎉🎉</S.Text>}
        {isGameOver && <S.Text>Game Over! You Lost 😭😭😭</S.Text>}
        <S.NewGame onClick={startNewGame}>New Game</S.NewGame>
      </S.Container>
    </S.Modal>
  );
};

export default Modal;
