import React, { useEffect } from "react";
import { useState } from "react";
import { getProdutos } from "../hook/useProdutos";
import style from "../pages/Pages.module.css";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import Pagination from "../Components/Pagination";
const LIMIT = 4;
const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [starts, setStarts] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  useEffect(() => {
    getProdutos(
      `http://localhost:3000/produtos?_start=${starts}&_limit=${LIMIT}`
    ).then((response) => {
      setProdutos(response);
      console.log(response);
    });
  }, [starts]);

  useEffect(() => {
    getProdutos(`http://localhost:3000/produtos`).then((response) => {
      setTotal(response.length);
    });
  }, []);

  function buscaProduto() {
    navigate("/produtos/search?nome=" + name);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            {produtos.length > 0 &&
              produtos.map((produto) => {
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
          total_de_items={total}
          starts={starts}
          setStarts={setStarts}
        />
      </main>
    </NavBar>
  );
};

export default Produtos;
