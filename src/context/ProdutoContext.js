import { createContext, useState } from "react";

export const ProdutoContext = createContext();

export const ProdutoContextProvider = ({ children }) => {
  const [listaDeProdutos, setListaDeProdutos] = useState([]);
  const [nomeDoProdutoPesquisado, setNomeDoProdutoPesquisado] = useState("");
  const [totalDeItems, setTotalDeItems] = useState(0);
  const [listaComecaCom, setListaComecaCom] = useState(0);

  return (
    <ProdutoContext.Provider
      value={{
        listaDeProdutos,
        setListaDeProdutos,
        nomeDoProdutoPesquisado,
        setNomeDoProdutoPesquisado,
        totalDeItems,
        setTotalDeItems,
        listaComecaCom,
        setListaComecaCom,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
};
