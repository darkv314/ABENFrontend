import Services from "../../../components/services/Services";
import useCart from "../../../hooks/useShoppingCart";
import "./carrito.css";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { gql, useMutation } from "@apollo/client";
import { servicios } from "../servicios/data";
import useAuth from "../../../hooks/useAuth";

function Carrito() {
    const { cart, setCart } = useCart();
    const { auth } = useAuth();
    const [parent, enableAnimations] = useAutoAnimate();
    const nav = document.querySelector(".nav");
    const navHeight = nav?.getBoundingClientRect().height;
    const CREAR_SERVICIOS = gql`
        mutation crearServicios($input: [ServicioInput!]!) {
            crearServicios(servicios: $input) {
                id
                nombre
                empresa
            }
        }
    `;
    const [crearServicios, { data, loading, error }] = useMutation(
        CREAR_SERVICIOS,
        {
            onCompleted: (data) => {
                console.log(data);
                setCart({ count: 0, servicios: [] });
            },
            context: {
                headers: { authorization: `Bearer ${auth.access_token}` },
            },
        }
    );

    function handleSubmit() {
        console.log(cart);
        const serviciosSolicitados = cart.servicios.map((servicio) => {
            let solicitud = {
                nombre: servicio.nombre,
                cantidad: servicio.cantidad,
                empresa: servicio.info.nombre,
                email: servicio.info.email,
                nit: servicio.info.nit,
                telefono: servicio.info.phone,
                usuarioId: auth.id,
            };
            let items = [];
            if (servicio.nombre === "Calibración") {
                items = servicio.items.map((item) => {
                    return {
                        nombre: item.nombreEquipo,
                        fabricante: item.fabricante,
                        modelo: item.modelo,
                        serie: item.serie,
                    };
                });
                solicitud["calibracion"] = {
                    equipos: items,
                };
            } else if (servicio.nombre === "Análisis de muestras") {
                items = servicio.items.map((item) => {
                    return {
                        tipo: item.tipoAnalisis,
                        procedencia: item.procedencia,
                        identificacion: item.identificacion,
                        coordenadas: item.coordenadas,
                    };
                });
                solicitud["analisis"] = { muestras: items };
            } else {
                items = servicio.items.map((item) => {
                    return {
                        nombre: item.nombreTrabajador,
                        ci: item.ci,
                        expedido: item.expedido,
                        cargo: item.cargo,
                    };
                });
                solicitud["dosimetria"] = {
                    empleados: items,
                    lecturas: parseInt(servicio.info.lecturas),
                    infoCourrier: {
                        responsable: servicio.courrierInfo.nombreReceptor,
                        telefono: servicio.courrierInfo.phone,
                        direccion: servicio.courrierInfo.direccion,
                    },
                    actividad: servicio.info.riesgo,
                };
            }
            return solicitud;
        });
        if (cart?.count === 0) {
            console.log("No hay nada");
        } else {
            console.log(serviciosSolicitados);
            crearServicios({ variables: { input: serviciosSolicitados } });
        }
    }
    return (
        <div
            className="cart-section"
            style={{ maxHeight: `calc(100vh - ${navHeight}px)` }}
        >
            <div className="cart-items" ref={parent}>
                {cart?.count ? (
                    cart?.servicios.map((servicio, index) => (
                        <Item
                            setCart={setCart}
                            key={servicio.id}
                            index={index}
                            nombre={servicio.nombre}
                            cantidad={servicio.cantidad}
                            precio={servicio.precio}
                        />
                    ))
                ) : (
                    <h1>No hay servicios en el carrito</h1>
                )}
            </div>
            <div className="comprarButton">
                <ActionButton type="button" handleClick={handleSubmit}>
                    Solicitar
                </ActionButton>
            </div>

            <Services />
        </div>
    );
}

function Item({ nombre, precio, cantidad, index, setCart }) {
    const navigate = useNavigate();

    function removeItem() {
        setCart((items) => ({
            ...items,
            count: items.count - 1,
            servicios: items.servicios.filter((item, i) => i !== index),
        }));
    }

    function onClick(e) {
        e.stopPropagation();
        navigate(`/carrito/${index}`);
    }

    return (
        <motion.div whileHover={{ scale: 1.01 }} className="cart-item">
            <div
                className="cart-text-container"
                tabIndex={0}
                onClick={(e) => {
                    onClick(e);
                }}
            >
                <h5>{nombre}</h5>
                <div className="cart-text">
                    <p>{cantidad}</p>
                    <p>{precio} Bs.</p>
                </div>
            </div>

            <div className="button-container">
                <ActionButton type={"button"} handleClick={() => removeItem()}>
                    <FaTrash />
                </ActionButton>
            </div>
        </motion.div>
    );
}

export default Carrito;
