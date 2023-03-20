import dosimetria from "../../../assets/dosimetria.png";
import calibracion from "../../../assets/calibracion.png";
import analisis from "../../../assets/analisis.png";

export const servicios = [
    {
        nombre: "Análisis de muestras",
        descripcion:
            "El Laboratorio de Radiometría de la ABEN se dedica principalmente a la medición, la vigilancia y la evaluación radiológica en residuos de chatarra ferrosa, para la detección de una posible presencia de material radiactivo.",
        img: analisis,
        precio: 100,
        preguntas: [
            {
                label: "Cantidad de material en miles de toneladas",
                type: "number",
                id: "cantidad",
            },
            {
                label: "Tipo de material",
                type: "text",
                id: "tipo",
            },
            {
                label: "Ubicación del material",
                type: "text",
                id: "ubicacion",
            },
            {
                label: "Pais de origen",
                type: "text",
                id: "pais",
            },
            {
                label: "Nombre de la empresa",
                type: "text",
                id: "empresa",
            },
        ],
    },
    {
        nombre: "Calibración",
        descripcion: [
            "La Unidad de Servicios Nucleares de la ABEN realiza la calibración de equipos detectores de radiación como: ",
            "items",
            "Un instrumento calibrado permite la evaluación correcta de la zona de trabajo y garantiza la salud de los empleados.",
        ],
        items: [
            "Monitores portátiles Geiger-Müller.",
            "Alarmas sónicas.",
            "Dosímetros de radiación portátiles de lectura directa.",
        ],
        img: calibracion,
        precio: 200000,
        preguntas: [
            {
                label: "Nombre del equipo",
                type: "text",
                id: "nombre-equipo",
            },
            {
                label: "Fabricante",
                type: "text",
                id: "fabricante",
            },
            {
                label: "Modelo",
                type: "text",
                id: "modelo",
            },
            {
                label: "Número de serie",
                type: "text",
                id: "serie",
            },
        ],
    },
    {
        nombre: "Lectura de dosímetros",
        descripcion: [
            "El servicio de dosimetría personal se aplica en los sectores de:",
            "items",
            "Su finalidad es garantizar que los trabajadores de forma individual cumplan con los requisitos del sistema de limitación de dosis y que de este modo no sean expuestos a radiaciones ionizantes de manera significativa. La dosimetría personal mide, evalúa y registra las dosis recibidas por las personas expuestas a radiaciones ionizantes en función de su trabajo, contribuyendo por lo tanto a proteger su salud en relación con los posibles efectos biológicos.",
        ],
        items: [
            "Gammagrafía Industrial.",
            "Medición industrial fija y móvil.",
            "Prospección petrolera.",
            "Radioterapia",
            "Medicina nuclear",
            "Radiodiagnóstico convencional, tomografía fluoroscopía, mamografía y radiodiagnóstico dental",
        ],
        img: dosimetria,
        precio: 300,
        preguntas: [
            {
                label: "Nombre completo del trabajador",
                type: "text",
                id: "nombre-trabajador",
            },
            {
                label: "Carnet de identidad",
                type: "number",
                id: "ci",
            },
            {
                label: "CI expedido en",
                type: "text",
                id: "expedido",
            },
            {
                label: "Cargo",
                type: "text",
                id: "cargo",
            },
        ],
    },
];
