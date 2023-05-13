import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
`;
export const Wrapper = styled.div`
  padding: 30px;
  border: 1px solid white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    gap: 10px;
  }
`;

export const Title = styled.div`
  font-size: 48px;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const Arrow = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
  visibility: ${({ level, left, right }) =>
    (left && level === 0) || (right && level === 2) ? "hidden" : "visible"};
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const PickedLevel = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;
export const LevelContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 250px;
  transition: all 0.5s ease;
  @media only screen and (max-width: 768px) {
    max-width: 150px;
  }
`;

export const Level = styled.p`
  display: flex;
  min-width: 100%;
  font-size: 48px;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const NewGame = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 5px;
  font-size: 30px;
  color: white;
  background-color: green;
  transition: transform 0.5s ease-in-out;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
