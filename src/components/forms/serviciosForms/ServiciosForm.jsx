import InputForm from "../formComponents/input/InputForm";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../../helpers/helpers";
import { useParams } from "react-router";

import "./serviciosForm.css";
import ActionButton from "../../buttons/actionButton/ActionButton";
import useAuth from "../../../hooks/useAuth";
import { servicios } from "../../../pages/cliente/servicios/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useCart from "../../../hooks/useShoppingCart";

function ServiciosForm() {
    const { cart, setCart } = useCart();
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm();
    function onSubmit(data) {
        console.log(data);
        setCart((items) => ({
            ...items,
            count: items.count + 1,
            servicios: [
                ...items.servicios,
                {
                    nombre: servicios[id].nombre,
                    cantidad: item,
                    precio: servicios[id].precio * item,
                },
            ],
        }));
    }
    const [itemList, setItemList] = useState([]);
    const [item, setItem] = useState(0);
    return (
        <div className="servicios-form">
            <div className="personal">
                <FormProvider {...{ register, trigger, errors, handleSubmit }}>
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
                                    key={item}
                                    position={item}
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

function ItemForm({ position, id, setItem }) {
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    function siguiente(data) {
        setItem((item) => item + 1);
        // console.log(data);
    }
    const { register, errors, trigger, handleSubmit } = useFormContext();
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
                <h2>{servicios[id]?.nombre}</h2>
                {servicios[id]?.preguntas?.map((pregunta, index) => (
                    <InputForm
                        key={index}
                        label={pregunta?.label}
                        id={`${pregunta?.id}-${position}`}
                        type={pregunta?.type}
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
            <InputForm
                id="dir"
                label="Dirección"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />

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
