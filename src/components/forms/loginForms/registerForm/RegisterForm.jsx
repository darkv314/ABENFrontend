import InputForm from "../../formComponents/input/InputForm";
import "react-phone-input-2/lib/style.css";
import {
    EMAIL_CHECK,
    errMsgRequired,
    errMsgEmail,
} from "../../../../helpers/helpers";
import "../../form.css";
import { useForm } from "react-hook-form";
import PhoneInputForm from "../../formComponents/input/PhoneInputForm";
import { motion } from "framer-motion";
import useAuth from "../../../../hooks/useAuth";
import { gql, useMutation } from "@apollo/client";
import ErrMsg from "../../formComponents/errMsg/ErrMsg";
import LoadingMessage from "../../formComponents/loadingMessage/LoadingMessage";
import ActionButton from "../../../buttons/actionButton/ActionButton";
import { useNavigate } from "react-router";

function RegisterForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const { setAuth } = useAuth();

    const REGISTER = gql`
        mutation signup($input: CrearClienteInput!) {
            signup(cliente: $input) {
                nombre
                access_token
                id
                rol {
                    nombre
                }
            }
        }
    `;

    const [signup, { data, loading, error }] = useMutation(REGISTER, {
        onCompleted: (data) => {
            const { nombre, id, access_token, rol } = data.signup;
            setAuth({ nombre, id, access_token, rol });
            navigate("/inicio");
        },
    });

    const onSubmit = (data) => {
        // console.log(data);
        signup({
            variables: {
                input: {
                    nombre: data.name,
                    email: data.email,
                    password: data.password,
                    telefono: `+${data.phone}`,
                    nit: data.nit,
                },
            },
        });
    };

    return (
        <form className="register-form form" onSubmit={handleSubmit(onSubmit)}>
            <ErrMsg errors={error} />
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
            <ActionButton>
                <LoadingMessage
                    message="Crear cuenta"
                    isLoadingMessage="Creando cuenta"
                    isLoading={loading}
                />
            </ActionButton>
            <ActionButton type="button" handleClick={() => navigate("/")}>
                Iniciar Sesión
            </ActionButton>
        </form>
    );
}

export default RegisterForm;
