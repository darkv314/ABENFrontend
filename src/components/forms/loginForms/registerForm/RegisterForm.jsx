import InputForm from "../../formComponents/input/InputForm";
// import "react-phone-input-2/lib/style.css";
import {
    EMAIL_CHECK,
    errMsgRequired,
    errMsgEmail,
} from "../../../../helpers/helpers";
import { useForm, FormProvider } from "react-hook-form";
import PhoneInputForm from "../../formComponents/input/PhoneInputForm";
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
                email
                nit
                id
                rol {
                    nombre
                }
            }
        }
    `;

    const [signup, { data, loading, error }] = useMutation(REGISTER, {
        onCompleted: (data) => {
            const { nombre, id, email, nit, access_token, rol } = data.signup;
            setAuth({ nombre, id, email, nit, access_token, rol });
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
        <FormProvider {...{ register, errors, control }}>
            <form
                className="register-form form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <ErrMsg errors={error} />
                <InputForm
                    id="name"
                    label="Nombre de la empresa"
                    type="text"
                    validations={{
                        required: errMsgRequired,
                    }}
                />

                <InputForm
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

                <PhoneInputForm />
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
        </FormProvider>
    );
}

export default RegisterForm;
