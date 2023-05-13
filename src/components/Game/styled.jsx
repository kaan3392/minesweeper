import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-color: black;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 90%;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  min-width: 500px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: white;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const GridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
  width: 50%;
  height: 80%;
  min-width: 500px;
`;

export const GridSystem = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.width},1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.height},1fr)`};
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
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 75px;
  cursor: pointer;
  background-color: ${(props) => (props.picked ? "red" : "green")};
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const BoardPage = styled(Link)`
  width: 75px;
  cursor: pointer;
  background-color: green;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
