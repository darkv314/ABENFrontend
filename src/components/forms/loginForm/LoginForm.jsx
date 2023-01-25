import "./loginForm.css";
import InputForm from "../input/InputForm";
import { useState } from "react";

function LoginForm({ setStateForm }) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    return (
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <InputForm
                id="username"
                label="Usuario"
                type="text"
                value={user}
                setValue={setUser}
            />
            <InputForm
                id="password"
                label="Contraseña"
                type="password"
                value={password}
                setValue={setPassword}
            />
            <p onClick={() => setStateForm(1)}>¿Olvidaste tu contraseña?</p>
            <button className="loginForm-button">Ingresar</button>
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
