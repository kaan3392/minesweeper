import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: black;
  flex-direction: column;
  gap: 20px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

export const GridSystem = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.width},30px)`};
  grid-template-rows: ${(props) => `repeat(${props.height},30px)`};
`;

export const Cell = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${(props) =>
    !props.isRevealed ? "gray" : props.isEmpty && "darkgreen"};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap:10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 75px;
  height: 50px;
  cursor: pointer;
  background-color: ${(props) => (props.picked ? "red" : "green")};
`;
