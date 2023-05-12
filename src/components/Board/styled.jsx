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
`;

export const Title = styled.div`
  font-size: 48px;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Arrow = styled.div`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  z-index: 2;
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
  transition: all .5s ease;
`;

export const Level = styled.p`
  display: flex;
  min-width: 100%;
  font-size: 48px;
  justify-content: center;
  align-items: center;`;

export const NewGame = styled.button`
  cursor: pointer;
  outline: none;
  border: 1px solid white;
  padding: 5px;
  border-radius: 5px;
  font-size: 30px;
  color: white;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;
