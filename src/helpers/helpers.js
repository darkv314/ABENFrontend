export const EMAIL_CHECK =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const CODE_CHECK = /^[+][0-9]+[ ]?[0-9]+$/;

export const errMsgRequired = "El campo es requerido";
export const errMsgEmail = "Ingresa un correo válido";
export const errMsgPhone = "Ingresa un teléfono válido";

export const labels = new Map();

labels.set("nombreTrabajador", "Nombre completo del trabajador");
labels.set("ci", "Carnet de identidad");
labels.set("expedido", "Expedido en");
labels.set("cargo", "Cargo");
labels.set("nombreEquipo", "Nombre del equipo");
labels.set("fabricante", "Fabricante");
labels.set("modelo", "Modelo");
labels.set("serie", "Número de serie");
labels.set("procedencia", "Procedencia de la muestra");
labels.set("identificacion", "Identificación de la muestra");
labels.set("coordenadas", "Coordenadas georeferenciadas");
labels.set("tipoAnalisis", "Tipo de análisis");
labels.set("precio", "Precio");
