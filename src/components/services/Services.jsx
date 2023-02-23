import CardService from "./cardService/CardService";
import "./services.css";
import dosimetria from "../../assets/dosimetria.png";
import analisis from "../../assets/analisis.png";
import calibracion from "../../assets/calibracion.png";

function Services() {
    const services = [
        { nombre: "Análisis de muestras", img: analisis },
        { nombre: "Calibración", img: calibracion },
        { nombre: "Lectura de dosímetros", img: dosimetria },
    ];
    return (
        <section className="services-container">
            {services.map((service, index) => (
                <CardService
                    key={index}
                    title={service.nombre}
                    img={service.img}
                />
            ))}
        </section>
    );
}

export default Services;
