import React from "react";
import { NavLink } from "react-router-dom";
import style from "../Components/NavBar.module.css";
const NavBar = ({ children }) => {
  return (
    <div>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/produtos" style={{ textDecoration: "none" }}>
              Produtos
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className={style.content}>{children}</main>
    </div>
  );
};

export default NavBar;
