import React, { useState } from "react";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

function Nav() {
    const { auth } = useAuth();
    const [count, setCount] = useState(0);
    return (
        <nav>
            <div className="nav-icons">
                <div className="icon-container">
                    <img src={logoAben} alt="Logo ABEN" />
                </div>
                <div className="icon-container">
                    <img
                        src={logoPluri}
                        alt="Logo Estado Plurinacional de Bolivia"
                    />
                </div>
            </div>
            {auth?.nombre ? (
                <div className="nav-links">
                    {/* Inicio */}
                    <FaShoppingCart />
                    <span className="cart-count">{count}</span>
                    {/* Inicio */}
                </div>
            ) : (
                <button className="loginForm-button">Registrate</button>
            )}
        </nav>
    );
}

export default Nav;
