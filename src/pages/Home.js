import React, { useEffect } from "react";
import NavBar from "../Components/NavBar";
import { useTituloContext } from "../hook/useTituloContext";
const Home = () => {
  const { color, dispatch } = useTituloContext();


  useEffect(() => {
    dispatch({type: "ALTERAR_COR", payload: "blue"})
  }, [dispatch])

  return (
    <NavBar>
      <header>
        <h1 style={{ color: color }}>Home</h1>
      </header>
      <main></main>
    </NavBar>
  );
};

export default Home;
