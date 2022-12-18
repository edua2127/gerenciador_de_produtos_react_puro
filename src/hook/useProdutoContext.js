import { useContext } from "react";
import { ProdutoContext } from "../context/ProdutoContext";

export const useProdutoContext = () => {
  const context = useContext(ProdutoContext);

  return context;
};
