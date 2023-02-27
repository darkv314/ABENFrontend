import abenLab from "../../assets/abenLab.png";
import "./introInicio.css";

function IntroInicio() {
    return (
        <div className="intro">
            <div className="intro-text">
                <h2>Servicios Nucleares</h2>
                <p>
                    La Unidad de Servicios Nucleares de la ABEN ofrece los
                    servicios de Dosimetría Personal, el servicio de Calibración
                    de monitores de radiación y servicio de análisis
                    radiométrico.
                </p>
                <div className="descripcion-list">
                    <ul>
                        <li>
                            El Servicio de Dosimetría Personal de la Agencia
                            Boliviana de Energía Nuclear (ABEN) permite que los
                            usuarios desempeñen una adecuada vigilancia
                            radiológica de su personal ocupacionalmente
                            expuesto. Nuestro servicio cuenta con la
                            Certificación del Laboratorio de Metrología de
                            Radiaciones Ionizantes - Universidad Federal de
                            Pernambuco LMRI-DEN/UFPE de Brasil, reconocido por
                            el OIEA como Laboratorio Secundario de Calibración
                            Dosimétrica.
                        </li>
                        <li>
                            La calibración de equipos detectores permite la
                            evaluación correcta de la zona de trabajo y
                            garantiza la salud del personal.
                        </li>
                        <li>
                            El laboratorio de radiometría de la ABEN se dedica
                            principalmente a la medición, la vigilancia y la
                            evaluación radiológica en residuos de chatarra
                            ferrosa, para la detección de una posible presencia
                            de material radiactivo.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="intro-img">
                <img src={abenLab} alt="" />
            </div>
        </div>
    );
}

export default IntroInicio;
