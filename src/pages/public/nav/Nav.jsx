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
    const { cart } = useCart();
    const { auth } = useAuth();

    const navigate = useNavigate();
    return (
        <nav className="nav">
            <div className="nav-icons">
                <div className="icon-container">
                    <Link to={"/inicio"}>
                        <img src={logoAben} alt="Logo ABEN" />
                    </Link>
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
