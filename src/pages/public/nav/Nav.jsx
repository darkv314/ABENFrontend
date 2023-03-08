import React, { useState } from "react";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import { useNavigate } from "react-router";

function Nav() {
    const { auth } = useAuth();
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
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
                    <div className="cart">
                        <FaShoppingCart />
                        <span className="cart-count">{count}</span>
                    </div>
                    {/* Inicio */}
                </div>
            ) : (
                <ActionButton
                    type="button"
                    handleClick={() => navigate("/registro")}
                >
                    Regístrate
                </ActionButton>
            )}
        </nav>
    );
}

export default Nav;
