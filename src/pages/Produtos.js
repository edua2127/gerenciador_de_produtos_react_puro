import React, { useEffect } from "react";
import { getProdutos } from "../hook/useProdutos";
import style from "../pages/Pages.module.css";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
import { useProdutoContext } from "../hook/useProdutoContext";
const LIMIT = 4;
const Produtos = () => {
  const navigate = useNavigate();
  const {
    listaDeProdutos,
    setListaDeProdutos,
    nomeDoProdutoPesquisado,
    setNomeDoProdutoPesquisado,
    totalDeItems,
    setTotalDeItems,
    listaComecaCom,
    setListaComecaCom,
  } = useProdutoContext();

  useEffect(() => {
    getProdutos(
      `http://localhost:3000/produtos?_start=${listaComecaCom}&_limit=${LIMIT}`
    ).then((response) => {
      setListaDeProdutos(response);
      console.log(response);
    });
  }, [listaComecaCom, setListaDeProdutos]);

  useEffect(() => {
    getProdutos(`http://localhost:3000/produtos`).then((response) => {
      setTotalDeItems(response.length);
    });
  }, [setTotalDeItems]);

  function buscaProduto() {
    navigate("/produtos/search?nome=" + nomeDoProdutoPesquisado);
  }
  return (
    <NavBar>
      <header>
        <h1>Produtos</h1>
      </header>
      <main>
        <form className={style.formulario_de_busca}>
          <label htmlFor="name" className={style.formulario_de_busca_label}>
            <span>Nome do Produto</span>
            <input
              className={style.formulario_de_busca_input}
              type="text"
              id="name"
              name="name"
              value={nomeDoProdutoPesquisado}
              onChange={(e) => setNomeDoProdutoPesquisado(e.target.value)}
            />
          </label>
          <button
            className={style.formulario_de_busca_botao}
            onClick={buscaProduto}
          >
            Buscar
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {listaDeProdutos.length > 0 &&
              listaDeProdutos.map((produto) => {
                return (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>
                      <button className={style.botao_editar}>Editar</button>
                      <button className={style.botão_excluir}>Excluir</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Pagination
          quantidade_de_items_por_pagina={LIMIT}
          total_de_items={totalDeItems}
          starts={listaComecaCom}
          setStarts={setListaComecaCom}
        />
      </main>
    </NavBar>
  );
};

export default Produtos;
