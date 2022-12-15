import React from "react";
import NavBar from "../Components/NavBar";
const Home = () => {
  return (
    <NavBar>
      <h2>Buscar Produto</h2>
      <input type="text" placeholder="digite o nome do produto" />
      <button>Buscar</button>
    </NavBar>
  );
};

export default Home;
