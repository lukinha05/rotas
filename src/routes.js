import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";

export default function MyRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Sobre />} path="/sobre"/>
                <Route element={<Servicos />} path="/servicos" />
            </Routes>
        </BrowserRouter>
    )
}