import { useState } from "react";
import InputForm from "../input/InputForm";
import "../form.css";

function NewPasswordForm() {
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <form className="newPassword-form form">
            <InputForm
                id="code"
                label="Ingresar código"
                type="text"
                value={code}
                setValue={setCode}
            />
            <InputForm
                id="newPassword"
                label="Nueva Contraseña"
                type="password"
                value={newPassword}
                setValue={setNewPassword}
            />
            <InputForm
                id="confirm"
                label="Confirmar Contraseña"
                type="password"
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <p>Volver a enviar código de recuperación</p>
            <button className="loginForm-button">Ingresar</button>
        </form>
    );
}

export default NewPasswordForm;
