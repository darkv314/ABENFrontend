import "./login.css";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import LoginForm from "../../../components/forms/loginForm/LoginForm";

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
                    <section className="services-container"></section>
                </section>
            </section>
            <section className="form-container">
                <h3>SERVICIOS NUCLEARES</h3>
                <LoginForm />l
            </section>
        </div>
    );
}

export default Login;
