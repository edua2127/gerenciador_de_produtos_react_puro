import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import CadastrarProduto from "./pages/produtos/Cadastrar";
import Search from "./pages/produtos/Search";
import NotFould from "./pages/NotFould";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/new" element={<CadastrarProduto />} />
          <Route path="/produtos/search" element={<Search />} />
          <Route path="*" element={<NotFould />} />
          <Route path="/home" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
