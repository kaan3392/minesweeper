import { createContext, useReducer } from "react";

const initialState = {
  mines: 50,
};

export const context = createContext(initialState);

const levelReducer = (state, action) => {
  switch (action.type) {
    case "beginner":
      return { ...state, mines: 10 };
    case "easy":
      return { ...state, mines: 30 };
    case "medium":
      return { ...state, mines: 60 };
    case "hard":
      return { ...state, mines: 75 };
    case "expert":
      return { ...state, mines: 110 };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(levelReducer, initialState);

  return (
    <context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </context.Provider>
  );
};

