import { useContext } from "react";
import { TituloContext } from "../context/TituloContext";

export const useTituloContext = () => {
  const context = useContext(TituloContext);

  if (!context) {
    console.log("contexto não encontrado");
  }
  return context;
};
