import "./login.css";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import LoginForm from "../../../components/forms/loginForm/LoginForm";
import Services from "../../../components/services/Services";
import ReferenceIcons from "../../../components/referenceIcons/ReferenceIcons";

function Login() {
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
                <LoginForm />
                <ReferenceIcons />
            </section>
        </div>
    );
}

export default Login;
