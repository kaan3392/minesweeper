import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ isGameOver, isWon }) => isGameOver || isWon ? "flex" : "none"  };
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  transition: all 0.5s ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  min-height: 80px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export const Text = styled.p`
  font-size: 25px;
  color: white;
  margin: 0 auto;
`;

export const NewGame = styled.button`
  min-width: 100px;
  cursor: pointer;
  background-color: green;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  font-weight: bold;
  color: white;
  font-size: 20px;
`;
