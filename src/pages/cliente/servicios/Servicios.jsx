import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import "./servicios.css";
import { servicios } from "./data";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import useAuth from "../../../hooks/useAuth";

function Servicios() {
    const { id } = useParams();
    const { auth } = useAuth();
    const [descripcion, setDescripcion] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const nav = document.querySelector(".nav");
    const navHeight = nav?.getBoundingClientRect().height;
    useEffect(() => {
        if (descripcion && location.pathname.includes("/formulario")) {
            setDescripcion(false);
        }
    }, []);
    return (
        <div
            className="servicios"
            style={{ maxHeight: `calc(100vh - ${navHeight}px)` }}
        >
            <Outlet />
            <div
                className="servicios-img"
                style={{ backgroundImage: `url(${servicios[id].img})` }}
            >
                <div className="servicios-img-text">
                    <h1>{servicios[id].nombre}</h1>
                    <ActionButton
                        type="button"
                        handleClick={
                            !auth?.nombre
                                ? () => navigate("/registro")
                                : descripcion
                                ? () => {
                                      navigate(`formulario/${id}`, {
                                          replace: true,
                                          state: { from },
                                      });

                                      setDescripcion(false);
                                  }
                                : () => {
                                      navigate("", {
                                          replace: true,
                                          state: { from },
                                      });
                                      setDescripcion(true);
                                  }
                        }
                    >
                        {!auth?.nombre
                            ? "Registrate para solicitar"
                            : descripcion
                            ? "Solicitar"
                            : "Descripción"}
                    </ActionButton>
                </div>
            </div>
        </div>
    );
}

export default Servicios;

export function ServiciosDescripcion() {
    const { id } = useParams();
    return (
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
    );
}
