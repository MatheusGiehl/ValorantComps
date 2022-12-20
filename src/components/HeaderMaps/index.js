import React from "react";
import BackButton from "../BackButton";
import "./style.css";

const HeaderMaps = () => {
    return (
        <div>
        <div className="header">
            <BackButton/>
            <span className="text-header">Mapas</span>
        </div>
        <div className="line"></div>
        </div>
    );
};

export default HeaderMaps