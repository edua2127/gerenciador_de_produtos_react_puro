import React from "react";
import NavBar from "../Components/NavBar";
import style from "./Pages.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <NavBar>
      <header>
        <h1>Home</h1>
      </header>
      <main></main>
    </NavBar>
  );
};

export default Home;
