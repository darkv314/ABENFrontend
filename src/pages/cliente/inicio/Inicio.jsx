import React, { useEffect } from "react";
import Services from "../../../components/services/Services";
import "./inicio.css";

import { gql, useQuery } from "@apollo/client";
import useAuth from "../../../hooks/useAuth";
import HiredServices from "../../../components/hiredServices/HiredServices";
import IntroInicio from "../../../components/introInicio/IntroInicio";
function Inicio() {
    const { auth } = useAuth();

    const GET_SERVICES = gql`
        query {
            servicios(usuarioId: ${auth.id}){
                nombre,
                estado{
                    nombre
                },
                cantidad,
                envio,
                recojo,
                fin,
                documentos{
                    nombre,
                }
            }
        }
    `;

    const { data, loading, error, startPolling, stopPolling } = useQuery(
        GET_SERVICES,
        {
            // pollInterval: 500,
            context: {
                headers: { authorization: `Bearer ${auth.access_token}` },
            },
        }
    );

    useEffect(() => {
        startPolling(2000);
    }, []);

    return (
        <div className="inicio">
            <IntroInicio />
            <Services />
            {console.log(data)}
            <HiredServices data={data} />
        </div>
    );
}

export default Inicio;
