import "./tablaService.css";

function TablaServices({ data }) {
    const servicios = [
        "Servicio contratado",
        "Estado",
        "Cantidad",
        "Fecha de envio/recojo",
        "Fecha de entrega",
        "Fecha de finalización",
        "Documentación",
    ];

    function className(value) {
        if (value === "Finalizado") {
            return "estado finalizado";
        } else if (!value) {
            return "estado no-aceptado";
        } else {
            return "estado en-proceso";
        }
    }
    // console.log(data);
    return (
        <div className="table-container">
            <div className="table-header">
                <table className="tabla-service">
                    <thead>
                        <tr className="table-row-head">
                            {servicios.map((servicio, index) => {
                                return <th key={index}>{servicio}</th>;
                            })}
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="table-body">
                <table>
                    <tbody>
                        {data?.map((servicio, index) => {
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
                                                                ? className(
                                                                      servicio[
                                                                          key
                                                                      ]
                                                                  )
                                                                : key
                                                        }
                                                    >
                                                        {servicio[key] ||
                                                            "No aceptado"}
                                                    </p>
                                                </td>
                                            );
                                        })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaServices;
