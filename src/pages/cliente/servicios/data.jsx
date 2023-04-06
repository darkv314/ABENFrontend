import dosimetria from "../../../assets/dosimetria.png";
import calibracion from "../../../assets/calibracion.png";
import analisis from "../../../assets/analisis.png";

export const servicios = [
    {
        nombre: "Análisis de muestras",
        descripcion:
            "El Laboratorio de Radiometría de la ABEN se dedica principalmente a la medición, la vigilancia y la evaluación radiológica en residuos de chatarra ferrosa, para la detección de una posible presencia de material radiactivo.",
        img: analisis,
        warning:
            "La cantidad mínima para las muestras varia dependiendo del tipo de análisis. En caso de ser análisis de suelos, el mínimo es de 1kg, en caso de ser análisis de agua, el mínimo es de 2 litros, finalmente, para las muestras orgánicas, el mínimo es de 500ml o 500gr dependiendo si la muestra es líquida o sólida.",
        precio: 100,
        preguntas: [
            {
                label: "Tipo de análisis",
                type: "selection",
                id: "tipoAnalisis",
                options: [
                    {
                        nombre: "Análisis de suelos",
                        options: [
                            {
                                nombre: "Análisis Químico de suelos",
                                options: [
                                    { nombre: "pH en agua (1:5)", precio: 28 },
                                    {
                                        nombre: "Conductividad Eléctrica",
                                        precio: 28,
                                    },
                                    {
                                        nombre: "pH en cloruro de Potasio (1:5)",
                                        precio: 30,
                                    },
                                    { nombre: "Acidez de cambio", precio: 36 },
                                    { nombre: "Calcio", precio: 56 },
                                    { nombre: "Magnesio", precio: 56 },
                                    { nombre: "Sodio", precio: 45 },
                                    { nombre: "Potasio", precio: 45 },
                                    { nombre: "Carbonatos libres", precio: 10 },
                                    { nombre: "Materia orgánica", precio: 55 },
                                    { nombre: "Nitrógeno Total", precio: 150 },
                                    {
                                        nombre: "Fósforo asimilable",
                                        precio: 50,
                                    },
                                ],
                            },
                            {
                                nombre: "Análisis Físico de suelos",
                                options: [
                                    {
                                        nombre: "Porcentaje de arena",
                                        precio: 75,
                                    },
                                ],
                            },
                            {
                                nombre: "Elementos metálicos solubles, totales o disponibles",
                                options: [
                                    { nombre: "Zinc", precio: 55 },
                                    { nombre: "Hierro", precio: 55 },
                                    { nombre: "Cobalto", precio: 55 },
                                    { nombre: "Manganeso", precio: 55 },
                                    { nombre: "Cobre", precio: 55 },
                                    { nombre: "Cromo", precio: 55 },
                                    { nombre: "Molibdeno", precio: 75 },
                                    { nombre: "Selenio", precio: 80 },
                                    { nombre: "Antimonio", precio: 86 },
                                    { nombre: "Cadmio", precio: 55 },
                                    { nombre: "Plomo", precio: 55 },
                                    { nombre: "Arsénico", precio: 88 },
                                    { nombre: "Mercurio", precio: 100 },
                                    { nombre: "Azufre", precio: 60 },
                                    { nombre: "Níquel", precio: 55 },
                                ],
                            },
                            {
                                nombre: "Otros análisis Químicos de suelos",
                                options: [
                                    {
                                        nombre: "Potasio intercambiable",
                                        precio: 40,
                                    },
                                    {
                                        nombre: "Relación Suelo/Agua pH y CE",
                                        precio: 30,
                                    },
                                    { nombre: "Calcio", precio: 45 },
                                    { nombre: "Magnesio", precio: 45 },
                                    { nombre: "Sodio", precio: 45 },
                                    { nombre: "Potasio", precio: 45 },
                                    { nombre: "Sulfatos", precio: 40 },
                                    { nombre: "Cloruros", precio: 60 },
                                    { nombre: "Bicarbonatos", precio: 35 },
                                    { nombre: "Carbonatos", precio: 35 },
                                    { nombre: "Carbono Orgánico", precio: 55 },
                                    {
                                        nombre: "pH en Cloruro de Calcio",
                                        precio: 32,
                                    },
                                    { nombre: "Carbonato Total", precio: 40 },
                                    {
                                        nombre: "Capacidad de Intercambio Catiónico",
                                        precio: 60,
                                    },
                                    {
                                        nombre: "Acidez hidrolítica",
                                        precio: 40,
                                    },
                                    {
                                        nombre: "Nitrato-N y Amonio-N",
                                        precio: 100,
                                    },
                                    {
                                        nombre: "Boro Soluble o disponible",
                                        precio: 50,
                                    },
                                    { nombre: "Salinidad", precio: 20 },
                                    {
                                        nombre: "Aluminio intercambiable",
                                        precio: 55,
                                    },
                                ],
                            },
                            {
                                nombre: "Otros análisis Físicos de suelos",
                                options: [
                                    { nombre: "Humedad", precio: 12 },
                                    { nombre: "Densidad real", precio: 130 },
                                    {
                                        nombre: "Densidad Aparente (*)",
                                        precio: 42,
                                    },
                                    { nombre: "Porosidad", precio: 40 },
                                    {
                                        nombre: "Capacidad de campo (*)",
                                        precio: 75,
                                    },
                                    {
                                        nombre: "Índice de Marchitez permanente (*)",
                                        precio: 75,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        nombre: "Análisis de actividad radioactiva para agua",
                        options: [
                            {
                                nombre: "Medición de isótopos de oxígeno (δ18O) y deuterio (δ2H or δD)",
                                precio: 485,
                            },
                            {
                                nombre: "Monitoreo Radiometrico ambiental (para cada 1000 toneladas)",
                                precio: 925,
                            },
                        ],
                    },
                    {
                        nombre: "Análisis de agua para riego",
                        options: [
                            {
                                nombre: "Análisis Fisico-Químico de agua para riego",
                                options: [
                                    { nombre: "Sólidos Totales", precio: 25 },
                                    { nombre: "Sólidos Disueltos", precio: 25 },
                                    {
                                        nombre: "Sólidos en suspensión",
                                        precio: 25,
                                    },
                                    { nombre: "pH", precio: 15 },
                                    {
                                        nombre: "Conductividad Eléctrica",
                                        precio: 15,
                                    },
                                    { nombre: "Calcio", precio: 40 },
                                    { nombre: "Magnesio", precio: 40 },
                                    { nombre: "Sodio", precio: 35 },
                                    { nombre: "Potasio", precio: 35 },
                                    { nombre: "Sulfatos", precio: 40 },
                                    { nombre: "Cloruros", precio: 40 },
                                    { nombre: "Carbonatos", precio: 25 },
                                    { nombre: "Bicarbonatos", precio: 25 },
                                    { nombre: "Boro", precio: 60 },
                                ],
                            },
                            {
                                nombre: "Otros Análisis Químicos de agua para riego",
                                options: [
                                    { nombre: "Hierro", precio: 55 },
                                    { nombre: "Manganeso", precio: 55 },
                                    { nombre: "Cobre", precio: 55 },
                                    { nombre: "Zinc", precio: 55 },
                                    { nombre: "Aluminio", precio: 70 },
                                    { nombre: "Cobalto", precio: 55 },
                                    { nombre: "Cromo", precio: 55 },
                                    { nombre: "Plomo", precio: 55 },
                                    { nombre: "Arsénico", precio: 88 },
                                    { nombre: "Cadmio", precio: 55 },
                                    { nombre: "Molibdeno", precio: 75 },
                                    { nombre: "Mercurio", precio: 100 },
                                    { nombre: "Amonio", precio: 50 },
                                    { nombre: "Nitratos", precio: 40 },
                                    { nombre: "Nitritos", precio: 60 },
                                    { nombre: "Fosfatos", precio: 60 },
                                    { nombre: "Azufre", precio: 45 },
                                    { nombre: "Salinidad", precio: 15 },
                                    { nombre: "RAS calculo", precio: 30 },
                                ],
                            },
                        ],
                    },
                    {
                        nombre: "Análisis de agua para consumo",
                        options: [
                            {
                                nombre: "Análisis Químico de agua para consumo",
                                options: [
                                    { nombre: "Aspecto", precio: 10 },
                                    { nombre: "Olor", precio: 10 },
                                    { nombre: "Color", precio: 15 },
                                    { nombre: "Turbidez", precio: 15 },
                                    { nombre: "Sólidos totales", precio: 35 },
                                    { nombre: "Sólidos disueltos", precio: 35 },
                                    {
                                        nombre: "Sólidos suspendidos",
                                        precio: 35,
                                    },
                                    { nombre: "pH", precio: 15 },
                                    {
                                        nombre: "Conductividad eléctrica",
                                        precio: 15,
                                    },
                                    { nombre: "Calcio", precio: 40 },
                                    { nombre: "Magnesio", precio: 40 },
                                    { nombre: "Sodio", precio: 35 },
                                    { nombre: "Potasio", precio: 35 },
                                    { nombre: "Dureza Total", precio: 40 },
                                    { nombre: "Alcalinidad Total", precio: 35 },
                                    { nombre: "Acidez Total", precio: 30 },
                                    { nombre: "Hierro", precio: 55 },
                                    { nombre: "Manganeso", precio: 55 },
                                    { nombre: "Sulfatos", precio: 40 },
                                    { nombre: "Nitratos", precio: 40 },
                                    { nombre: "Cloruros", precio: 40 },
                                    { nombre: "E- Coli", precio: 120 },
                                    {
                                        nombre: "Coliformes Totales",
                                        precio: 140,
                                    },
                                ],
                            },
                            {
                                nombre: "Otros Análisis Químicos de agua para consumo",
                                options: [
                                    { nombre: "Boro", precio: 50 },
                                    { nombre: "Cloro libre", precio: 30 },
                                    { nombre: "Cloro total", precio: 35 },
                                    { nombre: "Nitritos", precio: 60 },
                                    { nombre: "Sílice", precio: 75 },
                                    { nombre: "Fluoruros", precio: 50 },
                                    { nombre: "Carbonatos", precio: 25 },
                                    { nombre: "Bicarbonatos", precio: 25 },
                                    {
                                        nombre: "Sólidos Sedimentables",
                                        precio: 20,
                                    },
                                ],
                            },
                            {
                                nombre: "Análisis de metales para agua de consumo",
                                options: [
                                    { nombre: "Aluminio", precio: 70 },
                                    { nombre: "Antimonio", precio: 86 },
                                    { nombre: "Arsénico", precio: 88 },
                                    { nombre: "Cadmio", precio: 88 },
                                    { nombre: "Cobalto", precio: 88 },
                                    { nombre: "Cobre", precio: 88 },
                                    { nombre: "Cromo hexavalente", precio: 90 },
                                    { nombre: "Cromo total", precio: 88 },
                                    { nombre: "Litio", precio: 45 },
                                    { nombre: "Mercurio", precio: 100 },
                                    { nombre: "Níquel", precio: 88 },
                                    { nombre: "Plomo", precio: 90 },
                                    { nombre: "Selenio", precio: 90 },
                                    { nombre: "Zinc", precio: 88 },
                                ],
                            },
                        ],
                    },
                    {
                        nombre: "Análisis de agua residual",
                        options: [
                            {
                                nombre: "Análisis Fisico-Químico de agua residual",
                                options: [
                                    { nombre: "Turbidez", precio: 15 },
                                    { nombre: "Sólidos totales", precio: 35 },
                                    { nombre: "Sólidos disueltos", precio: 35 },
                                    {
                                        nombre: "Sólidos suspendidos",
                                        precio: 35,
                                    },
                                    {
                                        nombre: "Sólidos sedimentables",
                                        precio: 35,
                                    },
                                    { nombre: "pH", precio: 15 },
                                    {
                                        nombre: "Conductividad eléctrica",
                                        precio: 15,
                                    },
                                    { nombre: "Calcio", precio: 40 },
                                    { nombre: "Magnesio", precio: 40 },
                                    { nombre: "Sodio", precio: 35 },
                                    { nombre: "Potasio", precio: 35 },
                                    { nombre: "Oxígeno Disuelto", precio: 30 },
                                    {
                                        nombre: "Demanda bioquímica de Oxígeno",
                                        precio: 150,
                                    },
                                    {
                                        nombre: "Demanda Química de Oxígeno",
                                        precio: 100,
                                    },
                                    { nombre: "Aceites y Grasas", precio: 135 },
                                    { nombre: "Amonio", precio: 50 },
                                    { nombre: "Sulfuros", precio: 70 },
                                    {
                                        nombre: "Detergentes (SAAM)",
                                        precio: 135,
                                    },
                                    { nombre: "Fósforo Total", precio: 75 },
                                    { nombre: "Fosfatos", precio: 75 },
                                    { nombre: "Nitrógeno Total", precio: 115 },
                                    {
                                        nombre: "Hidrocarburos Totales",
                                        precio: 135,
                                    },
                                    { nombre: "Cianuros totales", precio: 100 },
                                    { nombre: "Fenoles Totales", precio: 100 },
                                ],
                            },
                            {
                                nombre: "Análisis de metales para agua residual",
                                options: [
                                    { nombre: "Aluminio", precio: 55 },
                                    { nombre: "Antimonio", precio: 70 },
                                    { nombre: "Arsénico", precio: 88 },
                                    { nombre: "Cadmio", precio: 60 },
                                    { nombre: "Cobalto", precio: 60 },
                                    { nombre: "Cobre", precio: 60 },
                                    { nombre: "Cromo hexavalente", precio: 90 },
                                    { nombre: "Cromo total", precio: 55 },
                                    { nombre: "Litio", precio: 45 },
                                    { nombre: "Mercurio", precio: 100 },
                                    { nombre: "Níquel", precio: 60 },
                                    { nombre: "Plomo", precio: 60 },
                                    { nombre: "Selenio", precio: 88 },
                                    { nombre: "Zinc", precio: 55 },
                                ],
                            },
                            {
                                nombre: "Otros servicios para agua residual",
                                options: [
                                    {
                                        nombre: "Medición de Caudales",
                                        precio: 155,
                                    },
                                    {
                                        nombre: "Clasificación de la calidad de aguas",
                                        precio: 800,
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        nombre: "Análisis de muestras orgánicas",
                        options: [
                            {
                                nombre: "Análisis Fisico-Químico de muestras orgánicas",
                                options: [
                                    { nombre: "Materia Seca", precio: 15 },
                                    { nombre: "Humedad", precio: 15 },
                                    { nombre: "Carbono Orgánico", precio: 55 },
                                    { nombre: "Nitrógeno Total", precio: 150 },
                                    { nombre: "Fósforo Total", precio: 75 },
                                    { nombre: "Potasio", precio: 35 },
                                    { nombre: "Calcio", precio: 40 },
                                    { nombre: "Magnesio", precio: 40 },
                                    { nombre: "Sodio", precio: 35 },
                                    { nombre: "Cobre", precio: 60 },
                                    { nombre: "Hierro", precio: 55 },
                                    { nombre: "Manganeso", precio: 55 },
                                    { nombre: "Zinc", precio: 55 },
                                    {
                                        nombre: "Pretratamiento de muestras",
                                        precio: 90,
                                    },
                                ],
                            },
                            {
                                nombre: "Otros análisis Quimicos para muestras orgánicas",
                                options: [
                                    { nombre: "pH 1%", precio: 28 },
                                    {
                                        nombre: "Conductividad Eléctrica",
                                        precio: 28,
                                    },
                                    { nombre: "Aspecto", precio: 10 },
                                    {
                                        nombre: "Solubilidad en agua",
                                        precio: 35,
                                    },
                                    { nombre: "Granulometría", precio: 35 },
                                    { nombre: "Densidad", precio: 20 },
                                    { nombre: "Ceniza", precio: 55 },
                                    { nombre: "Nitrógeno-amonio", precio: 100 },
                                    {
                                        nombre: "Nitrógeno-nitratos",
                                        precio: 100,
                                    },
                                    { nombre: "Aluminio", precio: 55 },
                                    { nombre: "Antimonio", precio: 86 },
                                    { nombre: "Arsénico", precio: 88 },
                                    { nombre: "Azufre", precio: 60 },
                                    { nombre: "Boro", precio: 50 },
                                    { nombre: "Cadmio", precio: 88 },
                                    { nombre: "Cobalto", precio: 88 },
                                    { nombre: "Cromo", precio: 88 },
                                    { nombre: "Molibdeno", precio: 75 },
                                    { nombre: "Níquel", precio: 55 },
                                    { nombre: "Selenio", precio: 88 },
                                    { nombre: "Plomo", precio: 90 },
                                ],
                            },
                        ],
                    },
                ],
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
        precio: 800,
        preguntas: [
            {
                label: "Nombre del equipo",
                type: "text",
                id: "nombreEquipo",
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
        warning:
            "El servicio de lectura de dosímetros cuenta con un servicio opcional extra de logistica de recojo y envío que es activable a partir de los 6 dosímetros, con un costo de 5Bs por dosimetro.",
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
        precio: 85,
        preguntas: [
            {
                label: "Nombre completo del trabajador",
                type: "text",
                id: "nombreTrabajador",
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
