import React, { useEffect, useState } from "react";

import NavBar from "../../Components/NavBar";
import style from "../Pages.module.css";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { getProdutos } from "../../hook/useProdutos";
const Search = () => {
  const navigate = useNavigate();
  const [searcParams] = useSearchParams();
  const url = "http://localhost:3000/produtos?" + searcParams;
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    getProdutos(url)
      .then((response) => {
        setProdutos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <NavBar>
      <header>
        <h1>Produto pesquisado</h1>
      </header>
      <main>
        {produtos &&
          produtos.map((produto) => {
            return (
              <article className={style.container_produto}>
                <h1>Id: {produto && produto.id}</h1>
                <h2>Nome: {produto && produto.nome}</h2>
                <h2>Descrição: {produto && produto.descricao}</h2>
              </article>
            );
          })}
        {produtos.length === 0 && <h3>Nenhum produto encontrado</h3>}
        <aside>
          <button
            className={style.botão_excluir}
            onClick={() => navigate("/produtos")}
          >
            Voltar
          </button>
        </aside>
      </main>
    </NavBar>
  );
};

export default Search;
