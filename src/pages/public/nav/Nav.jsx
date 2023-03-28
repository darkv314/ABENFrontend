import React, { useState } from "react";
import logoAben from "../../../assets/aben.png";
import logoPluri from "../../../assets/plurinacional.png";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import ActionButton from "../../../components/buttons/actionButton/ActionButton";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useShoppingCart";

function Nav() {
    const { auth } = useAuth();

    function navType() {
        if (auth?.rol?.nombre === "cliente") {
            return clientNav();
        } else if (auth?.rol?.nombre === "administrador") {
            return adminNav();
        } else if (auth?.rol?.nombre === "lab") {
            return labNav();
        } else {
            return noNav();
        }
    }

    return (
        <nav className="nav">
            <div className="nav-icons">
                <div className="icon-container">
                    <Link to={"/inicio"}>
                        <img src={logoAben} alt="Logo ABEN" />
                    </Link>
                </div>
                <div className="icon-container">
                    <Link to={"/inicio"}>
                        <img
                            src={logoPluri}
                            alt="Logo Estado Plurinacional de Bolivia"
                        />
                    </Link>
                </div>
            </div>
            {navType()}
        </nav>
    );
}

export default Nav;

function noNav() {
    const navigate = useNavigate();
    return (
        <ActionButton type="button" handleClick={() => navigate("/registro")}>
            Regístrate
        </ActionButton>
    );
}

function clientNav() {
    const { cart } = useCart();
    const navigate = useNavigate();
    const { auth } = useAuth();
    return (
        <div className="nav-links">
            <button
                type="button"
                className="cart"
                onClick={() => {
                    navigate("/inicio", { replace: true });
                    navigate("/carrito", {
                        state: { from: "/inicio" },
                    });
                }}
            >
                <FaShoppingCart />

                <span className="cart-count">{cart?.count}</span>
            </button>
        </div>
    );
}

function labNav() {
    const navigate = useNavigate();
    return (
        <div className="nav-links">
            <ActionButton type="button" handleClick={() => navigate("/tareas")}>
                Mis tareas
            </ActionButton>
        </div>
    );
}
