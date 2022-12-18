import React from "react";
import style from "./Pages.module.css";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
const NotFould = () => {
  const navigate = useNavigate();
  return (
    <NavBar>
      <header>
        <h1>Pagina não encontrada </h1>
      </header>
      <main>
        <button className={style.botão_excluir} onClick={() => navigate("/")}>
          Voltar
        </button>
      </main>
    </NavBar>
  );
};

export default NotFould;
