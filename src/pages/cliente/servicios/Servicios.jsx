import React from "react";
import { useParams } from "react-router-dom";

function Servicios() {
    const { id } = useParams();
    return (
        <div className="servicios">
            <div className="servicios-text"></div>
            <div className="servicios-img"></div>
        </div>
    );
}

export default Servicios;
