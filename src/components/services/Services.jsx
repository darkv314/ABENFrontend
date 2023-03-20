import CardService from "./cardService/CardService";
import "./services.css";
import dosimetria from "../../assets/dosimetria.png";
import analisis from "../../assets/analisis.png";
import calibracion from "../../assets/calibracion.png";
import { useLocation } from "react-router";

function Services({ newClass }) {
    const location = useLocation();
    const services = [
        { nombre: "Análisis de muestras", img: analisis },
        { nombre: "Calibración", img: calibracion },
        { nombre: "Lectura de dosímetros", img: dosimetria },
    ];
    return (
        <div className={`services-section ${newClass}`}>
            <h2>
                {location.pathname === "/carrito"
                    ? "¿Necesitas más servicios?"
                    : "Oferta de Servicios"}
            </h2>
            <section className="services-container">
                {services.map((service, index) => (
                    <CardService
                        key={index}
                        id={index}
                        title={service.nombre}
                        img={service.img}
                    />
                ))}
            </section>
        </div>
    );
}

export default Services;
