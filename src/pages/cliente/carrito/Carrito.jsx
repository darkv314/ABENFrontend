import Services from "../../../components/services/Services";
import useCart from "../../../hooks/useShoppingCart";
import "./carrito.css";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

function Carrito() {
    const { cart, setCart } = useCart();
    const [parent, enableAnimations] = useAutoAnimate();
    const nav = document.querySelector(".nav");
    const navHeight = nav?.getBoundingClientRect().height;
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
                <ActionButton
                    type="button"
                    handleClick={() => console.log(cart)}
                >
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
        <motion.div
            tabIndex={0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.975 }}
            className="cart-item"
            onClick={(e) => {
                onClick(e);
            }}
        >
            <h5>{nombre}</h5>
            <div className="cart-text">
                <p>{cantidad}</p>
                <p>{precio} Bs.</p>
            </div>
            <ActionButton type={"button"} handleClick={() => removeItem()}>
                <FaTrash />
            </ActionButton>
        </motion.div>
    );
}

export default Carrito;
