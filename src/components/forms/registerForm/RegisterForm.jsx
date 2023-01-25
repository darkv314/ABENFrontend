import { useState } from "react";
import InputForm from "../input/InputForm";

import "../form.css";

function RegisterForm({ setStateForm }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <form className="register-form form">
            <InputForm
                id="name"
                label="Nombre completo"
                type="text"
                value={name}
                setValue={setName}
            />
            <InputForm
                id="email"
                label="Email"
                type="text"
                value={email}
                setValue={setEmail}
            />
            <InputForm
                id="phone"
                label="Teléfono celular"
                type="text"
                value={phone}
                setValue={setPhone}
            />
            <button className="loginForm-button">Crear cuenta</button>
            <button
                onClick={() => setStateForm(0)}
                type="button"
                className="loginForm-button"
            >
                Iniciar Sesión
            </button>
        </form>
    );
}

export default RegisterForm;
