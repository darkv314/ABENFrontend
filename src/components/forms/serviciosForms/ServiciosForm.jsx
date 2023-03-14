import InputForm from "../formComponents/input/InputForm";
import { useForm } from "react-hook-form";
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

function ServiciosForm() {
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [itemList, setItemList] = useState([]);
    const [item, setItem] = useState(0);
    return (
        <div className="servicios-form">
            <div className="personal">
                <form>
                    {`${item + 1} de ${itemList.length + 1}`}
                    {item === 0 ? (
                        <InformacionPersonal
                            register={register}
                            errors={errors}
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
                                errors={errors}
                                register={register}
                                id={id}
                                setItem={setItem}
                                setItemList={setItemList}
                            />,
                        ])
                    )}
                </form>
            </div>
        </div>
    );
}

export default ServiciosForm;

function ItemForm({ position, id, register, errors, setItem }) {
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };
    return (
        <AnimatePresence mode={"wait"}>
            <motion.div
                variants={animation}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="item-form"
            >
                <h2>{servicios[id]?.nombre}</h2>
                {servicios[id]?.preguntas?.map((pregunta, index) => (
                    <InputForm
                        key={index}
                        register={register}
                        errors={errors[pregunta?.id]}
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
                    <ActionButton type="button" className="servicio-button">
                        Finalizar
                    </ActionButton>
                    <ActionButton
                        type="button"
                        className="servicio-button"
                        handleClick={() => setItem((item) => item + 1)}
                    >
                        Siguiente
                    </ActionButton>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

function InformacionPersonal({ register, errors, setItem }) {
    const { auth } = useAuth();
    const { nombre, email, nit } = auth;
    const { id } = useParams();
    const onSubmit = (data) => {
        console.log(data);
    };
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
            className="personal-info"
        >
            <h2>Información personal</h2>
            <InputForm
                register={register}
                errors={errors.nombre}
                id="nombre"
                label="Nombre de la institución"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
                value={nombre}
            />
            <InputForm
                register={register}
                errors={errors.email}
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
                errors={errors.nit}
                register={register}
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
                register={register}
                errors={errors.dir}
                id="dir"
                label="Dirección"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />

            {id === "2" ? (
                <InputForm
                    register={register}
                    errors={errors.riesgo}
                    id="riesgo"
                    label="Actividad asociada al riesgo de irradiación"
                    type="text"
                    validations={{
                        required: errMsgRequired,
                    }}
                />
            ) : null}

            <ActionButton
                type="button"
                handleClick={() => {
                    setItem((item) => item + 1);
                }}
            >
                Siguiente
            </ActionButton>
        </motion.div>
    );
}
