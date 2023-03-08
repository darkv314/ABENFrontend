import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./servicios.css";
import { servicios } from "./data";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import useAuth from "../../../hooks/useAuth";

function Servicios() {
    const { id } = useParams();
    const { auth } = useAuth();
    const navigate = useNavigate();
    return (
        <div className="servicios">
            <div className="servicios-text">
                <h2 className="titulo">{servicios[id].nombre}</h2>
                <div className="descripcion">
                    {typeof servicios[id].descripcion === "object"
                        ? servicios[id].descripcion.map((item, index) =>
                              item !== "items" ? (
                                  <p key={index}>{item}</p>
                              ) : (
                                  <ul key={index} className="lista-items">
                                      {servicios[id].items.map((a, index) => (
                                          <li className="item" key={index}>
                                              {a}
                                          </li>
                                      ))}
                                  </ul>
                              )
                          )
                        : servicios[id].descripcion}
                </div>
            </div>
            <div
                className="servicios-img"
                style={{ backgroundImage: `url(${servicios[id].img})` }}
            >
                <div className="servicios-img-text">
                    <h1>{servicios[id].nombre}</h1>
                    <ActionButton
                        type="button"
                        handleClick={
                            auth?.nombre
                                ? () => console.log("Redireccionar")
                                : () => navigate("/registro")
                        }
                    >
                        {auth?.nombre
                            ? "Solicitar"
                            : "Registrate para solicitar"}
                    </ActionButton>
                </div>
            </div>
        </div>
    );
}

export default Servicios;
