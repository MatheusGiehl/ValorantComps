import React from "react";
import { Routes , Route } from "react-router-dom";

import Home from './pages/Home';
import Mapas from './pages/Mapas';

export default () => {
    return(
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/mapas" element={<Mapas />} />
        </Routes>
    ) 
};