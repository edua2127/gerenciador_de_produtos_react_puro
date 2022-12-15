import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import CadastrarProduto from "./pages/produtos/Cadastrar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/new" element={<CadastrarProduto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
