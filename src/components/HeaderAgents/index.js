import React from "react";
import BackButton from "../BackButton";
import "./style.css";

const HeaderAgents = () => {
    return (
        <div>
        <div className="header">
            <BackButton/>
            <span className="text-header">Agentes</span>
        </div>
        <div className="line"></div>
        </div>
    );
};

export default HeaderAgents