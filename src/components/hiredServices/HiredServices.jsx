import "./hiredServices.css";

function HiredServices({ data }) {
    return (
        <div className="hired-services inicio-section">
            <h2>Servicios contratados</h2>
            {data && data.servicios.length > 0
                ? data.servicios.map((servicio) => <p>{servicio.inicio}</p>)
                : null}
        </div>
    );
}

export default HiredServices;
