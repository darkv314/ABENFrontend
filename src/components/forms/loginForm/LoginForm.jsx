import "./loginForm.css";
import InputForm from "../input/InputForm";

function LoginForm() {
    return (
        <form className="login-form">
            <InputForm id="username" label="Usuario" type="text" />
            <InputForm id="password" label="Contraseña" type="password" />
            <button> Iniciar Sesion</button>
            <button> Crear Cuenta</button>
        </form>
    );
}

export default LoginForm;
