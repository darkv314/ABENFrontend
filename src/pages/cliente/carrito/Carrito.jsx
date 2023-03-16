import useCart from "../../../hooks/useShoppingCart";

function Carrito() {
    const { cart, setCart } = useCart();
    return (
        <div>
            {cart?.count ? (
                cart?.servicios.map((servicio, index) => servicio.nombre)
            ) : (
                <h1>No hay servicios en el carrito</h1>
            )}
        </div>
    );
}

export default Carrito;
