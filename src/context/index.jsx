import { createContext, useReducer } from "react";

const initialState = {
  mines: 50,
};

export const context = createContext(initialState);

const levelReducer = (state, action) => {
  switch (action.type) {
    case "easy":
      return { ...state, mines: 30 };
    case "medium":
      return { ...state, mines: 50 };
    case "hard":
      return { ...state, mines: 70 };
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
