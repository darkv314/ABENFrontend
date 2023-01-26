import InputForm from "../input/InputForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { errMsgRequired } from "../../../helpers/helpers";

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
            <p className="link" onClick={() => setStateForm(1)}>
                ¿Olvidaste tu contraseña?
            </p>
            <button
                disabled={errors.keys ? true : false}
                className="loginForm-button"
            >
                Ingresar
            </button>
            <button
                type="button"
                onClick={() => setStateForm(2)}
                className="loginForm-button"
            >
                Crear Cuenta
            </button>
        </form>
    );
}

export default LoginForm;
