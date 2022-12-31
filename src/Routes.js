import React from "react";
import { Routes , Route } from "react-router-dom";

import Home from './pages/Home';
import Mapas from './pages/Mapas';
import Agentes from './pages/Agentes';

export default () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/mapas" element={<Mapas />} />
            <Route exact path="/agentes" element={<Agentes />} />
        </Routes>
    ) 
};