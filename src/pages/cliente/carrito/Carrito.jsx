import Services from "../../../components/services/Services";
import useCart from "../../../hooks/useShoppingCart";
import "./carrito.css";
import { FaTrash } from "react-icons/fa";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
                            key={index}
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

            <Services />
        </div>
    );
}

function Item({ nombre, precio, cantidad, index, setCart }) {
    function removeItem() {
        setCart((items) => ({
            ...items,
            count: items.count - 1,
            servicios: items.servicios.filter((item, i) => i !== index),
        }));
    }
    return (
        <div className="cart-item">
            <h5>{nombre}</h5>
            <div className="cart-text">
                <p>{cantidad}</p>
                <p>{precio} Bs.</p>
            </div>
            <ActionButton type={"button"} handleClick={() => removeItem()}>
                <FaTrash />
            </ActionButton>
        </div>
    );
}

export default Carrito;
