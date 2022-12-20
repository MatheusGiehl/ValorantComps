import React from "react";
import "./style.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from "react-router-dom";

function BackButton () {
    return (
        <div>
            <Link to="/">
             <button>
                <ChevronLeftIcon />
             </button>
             </Link>
        </div>
    );
};

export default BackButton