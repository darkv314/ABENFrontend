import "./tablaService.css";

function TablaServices({ data }) {
    const servicios = [
        "Servicio contratado",
        "Estado",
        "Catidad",
        "Fecha de envio/recojo",
        "Fecha de entrega",
        "Fecha de finalización",
        "Documentación",
    ];
    console.log(data);
    return (
        <div className="table-container">
            <table className="tabla-service">
                <tr className="table-row-head">
                    {servicios.map((servicio, index) => {
                        return (
                            <th className="table-header" key={index}>
                                {servicio}
                            </th>
                        );
                    })}
                </tr>

                {/* {data &&
                    data.map((servicio, index) => {
                        return <tr>servicio</tr>;
                    })}
                {data &&
                    data.map((servicio, index) => {
                        return <tr>servicio</tr>;
                    })}
                {data &&
                    data.map((servicio, index) => {
                        return <tr>servicio</tr>;
                    })}
                {data &&
                    data.map((servicio, index) => {
                        return <tr>servicio</tr>;
                    })}
                {data &&
                    data.map((servicio, index) => {
                        return <tr>servicio</tr>;
                    })}
                {data &&
                    data.map((servicio, index) => {
                        return <tr>servicio</tr>;
                    })} */}
            </table>
        </div>
    );
}

export default TablaServices;
