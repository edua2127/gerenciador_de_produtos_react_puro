import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Components/NavBar.module.css";
const NavBar = ({ children }) => {
  const marginTopValue = "20px";
  return (
    <div>
      <nav className={style.corpo_da_pagina}>
        <aside style={{ marginTop: marginTopValue }}>
          <NavLink style={{ textDecoration: "none" }} to={"/produtos"}>
            Ver
          </NavLink>
        </aside>
        <aside style={{ marginTop: marginTopValue }}>
          <NavLink style={{ textDecoration: "none" }} to={"/produtos/new"}>
            Cadastrar
          </NavLink>
        </aside>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default NavBar;
