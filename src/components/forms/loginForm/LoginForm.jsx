import "./loginForm.css";
import InputForm from "../input/InputForm";
import { AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function LoginForm() {
    return (
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <InputForm id="username" label="Usuario" type="text" />
            <InputForm id="password" label="Contraseña" type="password" />
            <p>¿Olvidaste tu contraseña?</p>
            <button className="loginForm-button">Iniciar Sesion</button>
            <button className="loginForm-button">Crear Cuenta</button>
        </form>
    );
}

export default LoginForm;
