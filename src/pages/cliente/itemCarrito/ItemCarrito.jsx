import { useParams } from "react-router";
import useCart from "../../../hooks/useShoppingCart";
import { labels } from "../../../helpers/helpers";
import "./itemCarrito.css";

function ItemCarrito() {
    const { id } = useParams();
    const { cart } = useCart();
    const info = cart?.servicios[id]?.info;
    const courrierInfo = cart?.servicios[id]?.courrierInfo;
    const items = cart?.servicios[id]?.items;

    return (
        <div className="item-cart-container">
            <h1>{cart.servicios[id].nombre}</h1>
            <div className="item-cart">
                <div className="info-item-cart">
                    <div className="general-info info">
                        <h2>Información general</h2>
                        <span>
                            <span>Cantidad: </span>
                            {cart?.servicios[id]?.cantidad}
                        </span>
                        <span>
                            <span>Precio: </span>
                            {cart?.servicios[id]?.precio}
                        </span>
                    </div>
                    <div className="service-info info">
                        {/* {console.log(info)} */}
                        <h2>Información sobre el pedido</h2>
                        <span>
                            <span>Nombre de la empresa: </span>
                            {info?.nombre}
                        </span>
                        <span>
                            <span>Email: </span>
                            {info?.email}
                        </span>
                        <span>
                            <span>Telefono: </span>
                            {info?.phone}
                        </span>
                        <span>
                            <span>Nit: </span>
                            {info?.nit}
                        </span>
                    </div>
                    <div className="info-envio info">
                        {cart?.servicios[id]?.courrierInfo ? (
                            <>
                                <h2>
                                    Información sobre el servicio de recojo y
                                    envío
                                </h2>
                                <span>
                                    <span>Nombre del contacto: </span>

                                    {courrierInfo?.nombreReceptor}
                                </span>
                                <span>
                                    <span>Teléfono: </span>
                                    {courrierInfo?.phone}
                                </span>
                                <span>
                                    <span>Dirección: </span>
                                    {courrierInfo?.direccion}
                                </span>
                            </>
                        ) : (
                            <>
                                <h2>
                                    Información sobre el servicio de recojo y
                                    envío
                                </h2>
                                <span>
                                    No se ha solicitado el servicio o no se ha
                                    llegado a la cantidad mínima de 6 dosímetros
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <div className="items-carrito">
                    <h2>Información sobre los items solicitados</h2>
                    <div className="items-info">
                        {items?.map((item, index) => {
                            return <ItemServicio key={index} item={item} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCarrito;

function ItemServicio({ item }) {
    return (
        <div className="item-servicio">
            {Object.keys(item).map((key, index) => {
                return (
                    <div key={index}>
                        <span>
                            <span>{labels.get(key.split("-")[0])}: </span>
                            {item[key]}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}
