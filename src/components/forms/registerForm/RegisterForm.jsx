import InputForm from "../input/InputForm";
import "react-phone-input-2/lib/style.css";
import {
    EMAIL_CHECK,
    errMsgRequired,
    errMsgEmail,
} from "../../../helpers/helpers";
import "../form.css";
import { useForm } from "react-hook-form";
import PhoneInputForm from "../input/PhoneInputForm";
import { motion } from "framer-motion";

function RegisterForm({ setStateForm }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    return (
        <form
            className="register-form form"
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
        >
            <InputForm
                register={register}
                errors={errors.name}
                id="name"
                label="Nombre de la empresa"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />

            <InputForm
                errors={errors.email}
                register={register}
                id="email"
                label="Email"
                type="text"
                validations={{
                    required: errMsgRequired,
                    pattern: {
                        value: EMAIL_CHECK,
                        message: errMsgEmail,
                    },
                }}
            />

            <InputForm
                errors={errors.nit}
                register={register}
                id="nit"
                label="NIT/Razón Social"
                type="number"
                validations={{
                    required: errMsgRequired,
                    minLength: {
                        value: 6,
                        message: "El número debe tener al menos 6 dígitos",
                    },
                }}
            />

            <InputForm
                register={register}
                errors={errors.password}
                id="password"
                label="Contraseña"
                type="password"
                validations={{
                    required: errMsgRequired,
                    minLength: {
                        value: 4,
                        message:
                            "La contraseña debe constar de almenos 6 caracteres",
                    },
                }}
            />

            <PhoneInputForm control={control} errors={errors.phone} />
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                // disabled={
                //     !validEmail || !validName || !validPhone ? true : false
                // }
                className="loginForm-button"
            >
                Crear cuenta
            </motion.button>
            <motion.button
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                onClick={() => setStateForm(0)}
                type="button"
                className="loginForm-button"
            >
                Iniciar Sesión
            </motion.button>
        </form>
    );
}

export default RegisterForm;
