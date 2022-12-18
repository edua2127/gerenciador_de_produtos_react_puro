import { createContext, useReducer } from "react";

export const TituloContext = createContext();
export const corDoTituloReducer = (state, action) => {
  switch(action.type) {
    case "ALTERAR_COR":
      return {...state, color: action.payload}
    default:
      return state;
  }
};
export const TituloContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(corDoTituloReducer, { color: "red" });
  return (
    <TituloContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TituloContext.Provider>
  );
};
