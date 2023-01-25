import { useState } from "react";
import InputForm from "../input/InputForm";
import "../form.css";

function PasswordForm({ setStateForm }) {
    const [email, setEmail] = useState("");
    return (
        <form className="password-form form">
            <InputForm
                id="contact"
                label="Ingresa tu email o número de teléfono"
                value={email}
                setValue={setEmail}
            />
            <button
                onClick={() => setStateForm(3)}
                type="button"
                className="loginForm-button"
            >
                Enviar Código
            </button>
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
