import "./login.css";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import LoginForm from "../../../components/forms/loginForm/LoginForm";
import Services from "../../../components/services/Services";
import ReferenceIcons from "../../../components/referenceIcons/ReferenceIcons";
import { useState } from "react";
import PasswordForm from "../../../components/forms/passwordForm/PasswordForm";
import RegisterForm from "../../../components/forms/registerForm/RegisterForm";

function Login() {
    const [stateForm, setStateForm] = useState(0);

    return (
        <div className="login">
            <section className="ads-container">
                <section className="icons-container">
                    <div className="icon-container">
                        <img src={logoAben} alt="Logo Aben" />
                    </div>
                    <div className="icon-container">
                        <img src={logoPluri} alt="Logo Aben" />
                    </div>
                </section>
                <section className="ads">Espacio Publicitario</section>
                <section className="services-section">
                    <h3>Oferta de Servicios</h3>
                    <Services />
                </section>
            </section>
            <section className="form-container">
                <h3>SERVICIOS NUCLEARES</h3>
                {stateForm === 0 ? (
                    <LoginForm setStateForm={setStateForm} />
                ) : stateForm === 1 ? (
                    <PasswordForm setStateForm={setStateForm} />
                ) : (
                    <RegisterForm setStateForm={setStateForm} />
                )}
                <ReferenceIcons />
            </section>
        </div>
    );
}

export default Login;
