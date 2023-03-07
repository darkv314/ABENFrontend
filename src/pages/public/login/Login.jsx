import "./login.css";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import Services from "../../../components/services/Services";
import ReferenceIcons from "../../../components/referenceIcons/ReferenceIcons";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router";

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

                <Services newClass="login-services" />
            </section>
            <section className="form-container">
                <h3>SERVICIOS NUCLEARES</h3>
                <Outlet />
                <ReferenceIcons />
            </section>
        </div>
    );
}

export default Login;
