import InputForm from "../input/InputForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { errMsgRequired } from "../../../helpers/helpers";
import { motion } from "framer-motion";

function LoginForm({ setStateForm }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form
            className="login-form form"
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
        >
            <InputForm
                register={register}
                errors={errors.username}
                id="username"
                label="Usuario"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />
            <InputForm
                register={register}
                errors={errors.password}
                id="password"
                label="Contraseña"
                type="password"
                validations={{
                    required: errMsgRequired,
                }}
            />
            <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.975 }}
                className="link"
                onClick={() => setStateForm(1)}
            >
                ¿Olvidaste tu contraseña?
            </motion.p>
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                // disabled={errors.keys ? true : false}
                className="loginForm-button"
            >
                Ingresar
            </motion.button>
            <motion.button
                type="button"
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => setStateForm(2)}
                className="loginForm-button"
            >
                Crear Cuenta
            </motion.button>
        </form>
    );
}

export default LoginForm;
