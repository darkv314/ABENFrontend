import { useState, useEffect } from "react";
import InputForm from "../input/InputForm";
import "../form.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
    EMAIL_CHECK,
    errMsgRequired,
    errMsgEmail,
} from "../../../helpers/helpers";
import PhoneInputForm from "../input/PhoneInputForm";

function PasswordForm({ setStateForm }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const [form, setForm] = useState(true);
    return (
        <form
            className="password-form form"
            onSubmit={handleSubmit((data) => {
                // console.log(data);
                setStateForm(3);
            })}
        >
            {form ? (
                <>
                    <InputForm
                        register={register}
                        errors={errors.contact}
                        id="contact"
                        label="Ingresa tu email"
                        validations={{
                            required: errMsgRequired,
                            pattern: {
                                value: EMAIL_CHECK,
                                message: errMsgEmail,
                            },
                        }}
                    />
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.975 }}
                        className="link"
                        onClick={() => setForm(!form)}
                    >
                        Enviar código al celular
                    </motion.p>
                </>
            ) : (
                <>
                    <PhoneInputForm control={control} errors={errors.phone} />
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.975 }}
                        className="link"
                        onClick={() => setForm(!form)}
                    >
                        Enviar código al email
                    </motion.p>
                </>
            )}
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                // onClick={() => }
                // type="button"
                className="loginForm-button"
            >
                Enviar Código
            </motion.button>
            <br />
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => setStateForm(0)}
                type="button"
                className="loginForm-button"
            >
                Iniciar Sesión
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => setStateForm(2)}
                type="button"
                className="loginForm-button"
            >
                Crear Cuenta
            </motion.button>
        </form>
    );
}

export default PasswordForm;
