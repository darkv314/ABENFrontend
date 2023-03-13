import "./tablaService.css";

function TablaServices({ data }) {
    function className(value) {
        if (value === "Finalizado") {
            return "estado finalizado";
        } else if (!value) {
            return "estado no-aceptado";
        } else {
            return "estado en-proceso";
        }
    }

    function generateRows(data) {
        return data?.map((servicio, index) => {
            return (
                <tr key={index}>
                    {Object.keys(servicio)
                        .splice(1)
                        .map((key, index) => {
                            return (
                                <td key={index}>
                                    <p
                                        className={
                                            key === "estado"
                                                ? className(servicio[key])
                                                : key
                                        }
                                    >
                                        {servicio[key]
                                            ? servicio[key]
                                            : key === "estado"
                                            ? "Contrato generado"
                                            : "-"}
                                    </p>
                                </td>
                            );
                        })}
                </tr>
            );
        });
    }

    return (
        <div className="table-container">
            <div className="table-header">
                <Header />
            </div>
            <div className="table-body">
                <table>
                    <tbody>{generateRows(data)}</tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaServices;
const servicios = [
    "Servicio contratado",
    "Estado",
    "Cantidad",
    "Fecha de envio/recojo",
    "Fecha de entrega",
    "Fecha de finalización",
    "Documentación",
];
function Header() {
    return (
        <table className="tabla-service">
            <thead>
                <tr className="table-row-head">
                    {servicios.map((servicio, index) => {
                        return <th key={index}>{servicio}</th>;
                    })}
                </tr>
            </thead>
        </table>
    );
}
