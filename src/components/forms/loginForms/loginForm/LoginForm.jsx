import InputForm from "../../formComponents/input/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../../../helpers/helpers";
import { motion } from "framer-motion";
import { gql, useMutation } from "@apollo/client";
import ErrMsg from "../../formComponents/errMsg/ErrMsg";
import useAuth from "../../../../hooks/useAuth";
import LoadingMessage from "../../formComponents/loadingMessage/LoadingMessage";
import ActionButton from "../../../buttons/actionButton/ActionButton";
import { useNavigate } from "react-router";

function LoginForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { setAuth } = useAuth();

    const LOGIN = gql`
        mutation login($input: UsuarioInputLogin!) {
            login(inputLogin: $input) {
                access_token
                nombre
                id
                email
                nit
                telefono
                rol {
                    id
                    nombre
                }
            }
        }
    `;

    const [login, { data, loading, error }] = useMutation(LOGIN, {
        onCompleted: (data) => {
            const { nombre, id, email, nit, access_token, rol, telefono } =
                data.login;
            setAuth({ nombre, id, email, nit, access_token, rol, telefono });
            if (rol?.nombre === "cliente") navigate("/inicio");
            else if (rol?.nombre === "lab") navigate("/inicio-lab");
        },
    });

    const onSubmit = (data) => {
        // console.log(data);
        login({ variables: { input: data } });
    };
    return (
        <FormProvider {...{ register, errors }}>
            <form className="login-form form" onSubmit={handleSubmit(onSubmit)}>
                {/* <p>{data?.data}</p> */}
                <ErrMsg errors={error} />
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
                    id="password"
                    label="Contraseña"
                    type="password"
                    validations={{
                        required: errMsgRequired,
                    }}
                />
                <motion.p
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.975 }}
                    className="link"
                    onClick={() => navigate("/codigo")}
                >
                    ¿Olvidaste tu contraseña?
                </motion.p>
                <ActionButton>
                    <LoadingMessage
                        message="Ingresar"
                        isLoadingMessage="Ingresando"
                        isLoading={loading}
                    />
                </ActionButton>
                <ActionButton
                    handleClick={() => navigate("/registro")}
                    type="button"
                >
                    Crear Cuenta
                </ActionButton>
            </form>
        </FormProvider>
    );
}

export default LoginForm;
