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
                 src="https://cdn-wp.thesportsrush.com/2022/02/1ea1c024-valorant-maps.jpg"
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