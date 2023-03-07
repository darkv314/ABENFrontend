import { useState } from "react";
import InputForm from "../input/InputForm";
import "../form.css";
import { CODE_CHECK, errMsgRequired } from "../../../helpers/helpers";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import ActionButton from "../../buttons/actionButton/ActionButton";

function NewPasswordForm() {
    let password;
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required(errMsgRequired)
            .min(4, "La contraseña debe tener al menos 4 caracteres")
            .max(20, "La contraseña no debe tener más de 20 caracteres"),
        cpassword: Yup.string()
            .required(errMsgRequired)
            .min(4, "La contraseña debe tener al menos 4 caracteres")
            .max(20, "La contraseña no debe tener más de 20 caracteres")
            .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
        code: Yup.string()
            .required(errMsgRequired)
            .min(4, "El código consta de 4 caracteres")
            .max(4, "El código consta de 4 caracteres"),
        // .matches(CODE_CHECK, "El campo debe ser un numero"),
    });
    const {
        register,
        handleSubmit,
        // reset,
        // watch,
        formState: { errors },
    } = useForm({ mode: "onTouched", resolver: yupResolver(formSchema) });

    // password = watch("password", "");
    return (
        <form
            className="newPassword-form form"
            onSubmit={handleSubmit((data) => {
                // console.log(data);
            })}
        >
            <InputForm
                register={register}
                errors={errors.code}
                id="code"
                label="Ingresar código"
                type="number"
                validations={{
                    required: errMsgRequired,
                    minLength: {
                        value: 4,
                        message: "El código consta de 4 caracteres",
                    },
                    maxLength: {
                        value: 4,
                        message: "El código consta de 4 caracteres",
                    },
                }}
            />
            <InputForm
                register={register}
                errors={errors.password}
                id="password"
                label="Nueva Contraseña"
                type="password"
                validations={
                    {
                        // required: errMsgRequired,
                        // minLength: {
                        //     value: 4,
                        //     message:
                        //         "La contraseña debe tener al menos 4 caracteres",
                        // },
                        // maxLength: {
                        //     value: 20,
                        //     message:
                        //         "La contraseña no debe tener más de 20 caracteres",
                        // },
                    }
                }
            />
            <InputForm
                register={register}
                errors={errors.cpassword}
                id="cpassword"
                label="Confirmar Contraseña"
                type="password"
                validations={
                    {
                        // required: errMsgRequired,
                    }
                }
            />
            <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.975 }}
                className="link"
            >
                Volver a enviar código de recuperación
            </motion.p>
            <ActionButton>Ingresar</ActionButton>
        </form>
    );
}

export default NewPasswordForm;
