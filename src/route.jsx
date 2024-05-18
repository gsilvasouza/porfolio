import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Projeto from "./pages/Projeto";
import Sobre from "./pages/Sobre";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/contacts" element={<Contato />}></Route>
          <Route path="/projects" element={<Projeto />}></Route>
          <Route path="/about" element={<Sobre />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
