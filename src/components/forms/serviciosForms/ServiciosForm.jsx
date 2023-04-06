import InputForm from "../formComponents/input/InputForm";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../../helpers/helpers";
import { useNavigate, useParams } from "react-router";
import PhoneInputForm from "../formComponents/input/PhoneInputForm";
import "./serviciosForm.css";
import ActionButton from "../../buttons/actionButton/ActionButton";
import useAuth from "../../../hooks/useAuth";
import { servicios } from "../../../pages/cliente/servicios/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useCart from "../../../hooks/useShoppingCart";
import { useEffect } from "react";
import MainAlert from "../../alerts/MainAlert";
import useLogistica from "../../../hooks/useLogistica";
import { TbCircleCheck } from "react-icons/tb";

function ServiciosForm() {
    const navigate = useNavigate();
    const { cart, setCart } = useCart();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        trigger,
        control,
        formState: { errors },
    } = useForm({
        resetOptions: {
            keepDirtyValues: true,
        },
    });
    function onSubmit(data) {
        // console.log(data);
        let formInfo = {};
        const elements = [];
        Object.keys(data).forEach((key) => {
            // console.log(key);
            if (key.includes("-")) {
                const newKey = {};
                newKey[key] = data[key];
                elements[parseInt(key.split("-")[1])] = {
                    ...elements[parseInt(key.split("-")[1])],
                    ...newKey,
                };
                elements[parseInt(key.split("-")[1])][key] = data[key];
            } else {
                formInfo[key] = data[key];
            }
        });
        setCart((items) => ({
            ...items,
            count: items.count + 1,
            servicios: [
                ...items.servicios,
                {
                    id: items.servicios.length,
                    nombre: servicios[id].nombre,
                    cantidad: item,
                    precio: servicios[id].precio * item,
                    info: formInfo,
                    items: elements,
                    courrierInfo,
                },
            ],
        }));
        navigate("/inicio", { replace: true });
        navigate("/carrito");
    }
    const [itemList, setItemList] = useState([]);
    const [item, setItem] = useState(0);
    const [courrier, setCourrier] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const { logistica, setLogistica } = useLogistica();
    const [courrierInfo, setCourrierInfo] = useState(null);
    useEffect(() => {
        if (
            itemList.length === 6 &&
            servicios[id].nombre === "Lectura de dosímetros"
        ) {
            setCourrier(true);
            setLogistica((oldLogistica) => {
                return {
                    ...oldLogistica,
                    buttonActive: true,
                    buttonAccepted: false,
                };
            });
        }
    }, [itemList]);

    function onClose() {
        setCourrier(false);
        setAccepted(false);
    }
    return (
        <div className="servicios-form">
            {courrier && (
                <MainAlert
                    title="Servicio de Recojo y Entrega de dosímetros"
                    description="Has registrado 6 dosimetros o más, ¿Deseas solicitar el servicio de Recojo y Entrega de dosimetros? El costo por dosimetro son de 5Bs"
                    onClose={onClose}
                >
                    {accepted ? (
                        <InformacionCourrier
                            setAccepted={setAccepted}
                            setCourrier={setCourrier}
                            setCourrierInfo={setCourrierInfo}
                            courrierInfo={courrierInfo}
                        />
                    ) : (
                        <div className="button-section">
                            <ActionButton
                                type="button"
                                handleClick={() => setAccepted(true)}
                            >
                                Sí
                            </ActionButton>
                            <ActionButton
                                type="button"
                                handleClick={() => setCourrier(false)}
                            >
                                No
                            </ActionButton>
                        </div>
                    )}
                </MainAlert>
            )}
            <div className="personal">
                <FormProvider
                    {...{
                        register,
                        control,
                        trigger,
                        errors,
                        handleSubmit,
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {`${item + 1} de ${itemList.length + 1}`}
                        {item === 0 ? (
                            <InformacionPersonal
                                setItem={setItem}
                                setItemList={setItemList}
                            />
                        ) : (
                            itemList[item - 1] ||
                            setItemList((list) => [
                                ...list,
                                <ItemForm
                                    setCourrier={setCourrier}
                                    key={item}
                                    position={item - 1}
                                    index={item - 1}
                                    id={id}
                                    setItem={setItem}
                                    setItemList={setItemList}
                                />,
                            ])
                        )}
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}

export default ServiciosForm;

function ItemForm({ position, id, setItem, setCourrier }) {
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    function siguiente(data) {
        setItem((item) => item + 1);
        // console.log(data);
    }
    const { handleSubmit } = useFormContext();
    const { logistica } = useLogistica();
    return (
        <AnimatePresence mode={"wait"}>
            <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                transition={{ duration: "0.4" }}
                exit="exit"
                className="item-form"
            >
                <div className="form-header">
                    <h2>{servicios[id]?.nombre}</h2>
                    {logistica.buttonActive ? (
                        <ActionButton
                            type="button"
                            handleClick={() => setCourrier(true)}
                        >
                            {logistica.buttonAccepted ? (
                                <TbCircleCheck />
                            ) : (
                                "Activar recojo y entrega"
                            )}
                        </ActionButton>
                    ) : null}
                </div>
                {servicios[id]?.preguntas?.map((pregunta, index) => (
                    <InputForm
                        key={index}
                        label={pregunta?.label}
                        id={`${pregunta?.id}-${position}`}
                        type={pregunta?.type}
                        options={pregunta?.options}
                        validations={{
                            required: errMsgRequired,
                        }}
                    />
                ))}
                <div className="servicios-buttons">
                    <ActionButton
                        className="servicio-button"
                        type="button"
                        handleClick={() =>
                            setItem((item) => {
                                if (item === 0) return 0;
                                else return item - 1;
                            })
                        }
                    >
                        Atrás
                    </ActionButton>
                    <ActionButton className="servicio-button">
                        Añadir al carrito
                    </ActionButton>
                    <ActionButton
                        type="button"
                        className="servicio-button"
                        handleClick={handleSubmit(siguiente)}
                    >
                        Añadir ítem
                    </ActionButton>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

function InformacionPersonal({ setItem }) {
    const { auth } = useAuth();
    const { nombre, email, nit } = auth;
    const { id } = useParams();
    const onSubmit = (data) => {
        // console.log(data, "personal form");
        setItem((item) => item + 1);
    };
    const { handleSubmit } = useFormContext();
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    return (
        <motion.div
            variants={animation}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: "0.4" }}
            className="personal-info"
        >
            <h2>Información personal</h2>
            <InputForm
                id="nombre"
                label="Nombre de la institución"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
                value={nombre}
            />
            <InputForm
                id="email"
                label="Email"
                type="text"
                validations={{
                    required: errMsgRequired,
                    pattern: {
                        value: EMAIL_CHECK,
                        message: errMsgEmail,
                    },
                }}
                value={email}
            />
            <InputForm
                id="nit"
                label="NIT/Razón Social"
                type="number"
                validations={{
                    required: errMsgRequired,
                    minLength: {
                        value: 6,
                        message: "El número debe tener al menos 6 dígitos",
                    },
                }}
                value={nit}
            />
            <PhoneInputForm />

            {id === "2" ? (
                <InputForm
                    id="riesgo"
                    label="Actividad asociada al riesgo de irradiación"
                    type="text"
                    validations={{
                        required: errMsgRequired,
                    }}
                />
            ) : null}
            <ActionButton type={"button"} handleClick={handleSubmit(onSubmit)}>
                Siguiente
            </ActionButton>
        </motion.div>
    );
}

function InformacionCourrier({
    setAccepted,
    setCourrier,
    setCourrierInfo,
    courrierInfo,
}) {
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm();

    const { logistica, setLogistica } = useLogistica();
    const animation = {
        hidden: { x: -10, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: 10, opacity: 0 },
    };
    function onSubmit(data) {
        console.log(data);
        setCourrierInfo(data);
        setCourrier(false);
        setLogistica((logistica) => {
            return { ...logistica, buttonAccepted: true };
        });
    }
    function onCancel() {
        setAccepted(false);
        setLogistica((logistica) => {
            return { ...logistica, buttonAccepted: false };
        });
        setCourrierInfo(null);
    }
    return (
        <AnimatePresence mode={"wait"}>
            <FormProvider {...{ register, errors }}>
                <motion.form
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: "0.5" }}
                    className="courrier-info"
                >
                    <h3>Información para el servicio de Envío y Recojo</h3>
                    <InputForm
                        id="nombreReceptor"
                        label="Nombre del receptor"
                        type="text"
                        validations={{
                            required: errMsgRequired,
                        }}
                        value={courrierInfo?.nombreReceptor}
                    />

                    <InputForm
                        id="direccion"
                        label="Dirección"
                        type="text"
                        validations={{
                            required: errMsgRequired,
                        }}
                        value={courrierInfo?.direccion}
                    />
                    <div className="courrier-buttons">
                        <ActionButton type={"button"} handleClick={onCancel}>
                            Cancelar
                        </ActionButton>
                        <ActionButton
                            type={"button"}
                            handleClick={handleSubmit(onSubmit)}
                        >
                            Confirmar
                        </ActionButton>
                    </div>
                </motion.form>
            </FormProvider>
        </AnimatePresence>
    );
}
