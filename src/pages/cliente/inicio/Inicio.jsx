import React from "react";
import Services from "../../../components/services/Services";
import "./inicio.css";
import abenLab from "../../../assets/abenLab.png";

function Inicio() {
    return (
        <div className="inicio">
            <div className="intro">
                <div className="intro-text">
                    <h2>Servicios Nucleares</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        In accusantium voluptatem placeat, repellendus aliquam
                        minus, eligendi autem ad eaque deserunt doloribus
                        voluptas, velit officiis optio odit asperiores adipisci
                        quas ullam?
                    </p>
                </div>
                <div className="intro-img">
                    <img src={abenLab} alt="" />
                </div>
            </div>
            <div className="services-inicio inicio-section">
                <h2>Oferta de Servicios</h2>
                <Services />
            </div>

            <div className="hired-services inicio-section">
                <h2>Servicios contratados</h2>
            </div>
        </div>
    );
}

export default Inicio;
