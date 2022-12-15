import React, { useEffect } from "react";
import { useState } from "react";
import { getProdutos } from "../hook/useProdutos";
import style from "../pages/Pages.module.css";
const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    getProdutos().then((response) => {
      setProdutos(response);
    });
  }, []);
  return (
    <div>
      <header>
        <h1>Produtos</h1>
      </header>
      <main>
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
      </main>
    </div>
  );
};

export default Produtos;
