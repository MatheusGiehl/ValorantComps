import React from "react";
import Header from '../../components/Header';
import { Link } from "react-router-dom";
import "./styles.css";

function Home () {
    return (
        <div>
        <Header/>
            <div className="container">
                <div className="maps">
                    <Link to='/mapas'>
                <img
                 src="https://whatifgaming.com/wp-content/uploads/2021/05/Valorant-Map-Queue.png"
                 alt="Mapas"
                 />
                 </Link>
                <p>Mapas</p>
                </div>
                <div className="agents">
                    <img src="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2020/07/valorant-tier-list-best-agents.jpg"/>
                    <p>Agentes</p>
                </div>
            </div>
        </div>
    )
}

export default Home