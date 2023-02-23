import React from "react";
import Services from "../../../components/services/Services";
import "./inicio.css";
import abenLab from "../../../assets/abenLab.png";
import { gql, useQuery } from "@apollo/client";
import useAuth from "../../../hooks/useAuth";
import HiredServices from "../../../components/hiredServices/HiredServices";

function Inicio() {
    const { auth } = useAuth();

    const GET_SERVICES = gql`
        query {
            servicios(usuarioId: ${auth.id}){
                inicio
            }
        }
    `;

    const { data, loading, error } = useQuery(GET_SERVICES, {
        context: { headers: { authorization: `Bearer ${auth.access_token}` } },
    });

    // console.log(data);
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

            <HiredServices data={data} />
        </div>
    );
}

export default Inicio;
