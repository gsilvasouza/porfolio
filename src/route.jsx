import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Projeto from "./pages/Projeto";
import Sobre from "./pages/Sobre";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<Contato />}></Route>
        <Route path="/projects" element={<Projeto />}></Route>
        <Route path="/about" element={<Sobre />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
