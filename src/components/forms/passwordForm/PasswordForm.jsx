import { useState, useEffect } from "react";
import InputForm from "../input/InputForm";
import "../form.css";
import PhoneInput from "react-phone-input-2";
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
                console.log(data);
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
                    <p className="link" onClick={() => setForm(!form)}>
                        Enviar código al celular
                    </p>
                </>
            ) : (
                <>
                    <PhoneInputForm control={control} errors={errors.phone} />
                    <p className="link" onClick={() => setForm(!form)}>
                        Enviar código al email
                    </p>
                </>
            )}
            <button
                // onClick={() => }
                // type="button"
                className="loginForm-button"
            >
                Enviar Código
            </button>
            <br />
            <button
                onClick={() => setStateForm(0)}
                type="button"
                className="loginForm-button"
            >
                Iniciar Sesión
            </button>
            <button
                onClick={() => setStateForm(1)}
                type="button"
                className="loginForm-button"
            >
                Crear Cuenta
            </button>
        </form>
    );
}

export default PasswordForm;
