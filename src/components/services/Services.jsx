import CardService from "./cardService/CardService";
import "./services.css";

function Services() {
    const services = [
        "Análisis de muestras",
        "Calibración",
        "Lectura de dosímetros",
    ];
    return (
        <section className="services-container">
            {services.map((service, index) => (
                <CardService key={index} title={service} />
            ))}
        </section>
    );
}

export default Services;
