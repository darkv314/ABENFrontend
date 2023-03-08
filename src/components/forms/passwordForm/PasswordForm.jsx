import { useState, useEffect } from "react";
import InputForm from "../input/InputForm";
import "../form.css";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
    EMAIL_CHECK,
    errMsgRequired,
    errMsgEmail,
} from "../../../helpers/helpers";
import PhoneInputForm from "../input/PhoneInputForm";
import ActionButton from "../../buttons/actionButton/ActionButton";
import { useNavigate } from "react-router";

function PasswordForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const [form, setForm] = useState(true);
    const onSubmit = (data) => {
        console.log(data);
        navigate("/password");
    };
    return (
        <form className="password-form form" onSubmit={handleSubmit(onSubmit)}>
            {form ? (
                <>
                    <InputForm
                        register={register}
                        errors={errors.contact}
                        id="contact"
                        label="Ingresa tu email"
                        validations={{
                            required: errMsgRequired,
                            pattern: {
                                value: EMAIL_CHECK,
                                message: errMsgEmail,
                            },
                        }}
                    />
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.975 }}
                        className="link"
                        onClick={() => setForm(!form)}
                    >
                        Enviar código al celular
                    </motion.p>
                </>
            ) : (
                <>
                    <PhoneInputForm control={control} errors={errors.phone} />
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.975 }}
                        className="link"
                        onClick={() => setForm(!form)}
                    >
                        Enviar código al email
                    </motion.p>
                </>
            )}
            <ActionButton type="submit">Enviar Código</ActionButton>
            <br />
            <ActionButton type="button" handleClick={() => navigate("/")}>
                Iniciar Sesión
            </ActionButton>
            <ActionButton
                type="button"
                handleClick={() => navigate("/registro")}
            >
                Crear Cuenta
            </ActionButton>
        </form>
    );
}

export default PasswordForm;
