import { useEffect, useState } from "react";
import InputForm from "../input/InputForm";
import "react-phone-input-2/lib/style.css";
import { CODE_CHECK, EMAIL_CHECK } from "../../../helpers/helpers";
import "../form.css";
import PhoneInput from "react-phone-input-2";

function RegisterForm({ setStateForm }) {
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(false);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [phone, setPhone] = useState("");
    const [validPhone, setValidPhone] = useState(false);

    useEffect(() => {
        name.length >= 4 ? setValidName(true) : setValidName(false);
    }, [name]);

    useEffect(() => {
        setValidEmail(email.toLowerCase().match(EMAIL_CHECK));
    }, [email]);

    useEffect(() => {
        setValidPhone(
            phone.toLowerCase().match(CODE_CHECK) && phone.length >= 8
        );
    }, [phone]);

    return (
        <form className="register-form form">
            <InputForm
                id="name"
                label="Nombre completo"
                type="text"
                value={name}
                setValue={setName}
            />
            <InputForm
                id="email"
                label="Email"
                type="text"
                value={email}
                setValue={setEmail}
            />

            <div className="input-form">
                <label htmlFor="phone">Teléfono celular</label>
                <PhoneInput
                    country={"bo"}
                    placeholder="+591 777 111 22"
                    id="phone"
                    inputStyle={{
                        width: "100%",
                        border: "none",
                        fontFamily: "inherit",
                    }}
                    buttonStyle={{ border: "none" }}
                    regions={["south-america"]}
                    onChange={(phone) => setPhone(phone)}
                />
            </div>
            <button
                disabled={
                    !validEmail || !validName || !validPhone ? true : false
                }
                className="loginForm-button"
            >
                Crear cuenta
            </button>
            <button
                onClick={() => setStateForm(0)}
                type="button"
                className="loginForm-button"
            >
                Iniciar Sesión
            </button>
        </form>
    );
}

export default RegisterForm;
