import React from "react";
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
                inicio
            }
        }
    `;

    const { data, loading, error } = useQuery(GET_SERVICES, {
        context: { headers: { authorization: `Bearer ${auth.access_token}` } },
    });

    return (
        <div className="inicio">
            <IntroInicio />
            <Services />
            <HiredServices data={data} />
        </div>
    );
}

export default Inicio;
