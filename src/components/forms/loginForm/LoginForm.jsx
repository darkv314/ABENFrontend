import InputForm from "../input/InputForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../../helpers/helpers";
import { motion } from "framer-motion";
import { gql, useMutation } from "@apollo/client";
import ErrMsg from "../errMsg/ErrMsg";
import useAuth from "../../../hooks/useAuth";

function LoginForm({ navigate, setStateForm }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { setAuth } = useAuth();

    const LOGIN = gql`
        mutation login($input: UsuarioInputLogin!) {
            login(inputLogin: $input) {
                access_token
                nombre
                id
                rol {
                    id
                    nombre
                }
            }
        }
    `;

    const [login, { data, loading, error }] = useMutation(LOGIN, {
        onCompleted: (data) => {
            const { nombre, id, access_token, rol } = data.login;
            setAuth({ nombre, id, access_token, rol });
            navigate("/inicio");
        },
    });

    const onSubmit = (data) => {
        console.log(data);
        login({ variables: { input: data } });
    };
    return (
        <form className="login-form form" onSubmit={handleSubmit(onSubmit)}>
            <p>{data?.data}</p>
            <ErrMsg errors={error} />
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
                // onClick={() => navigate("/inicio")}
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
