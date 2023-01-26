import InputForm from "../input/InputForm";
import "react-phone-input-2/lib/style.css";
import {
    CODE_CHECK,
    EMAIL_CHECK,
    errMsgRequired,
    errMsgPhone,
    errMsgEmail,
} from "../../../helpers/helpers";
import "../form.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import PhoneInputForm from "../input/PhoneInputForm";

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
                label="Nombre completo"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />

            <InputForm
                register={register}
                errors={errors.username}
                id="username"
                label="Nombre de usuario"
                type="text"
                validations={{
                    required: errMsgRequired,
                    minLength: {
                        value: 4,
                        message:
                            "El nombre de usuario debe contener almenos 4 caracteres",
                    },
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

            <PhoneInputForm control={control} errors={errors.phone} />
            <button
                // disabled={
                //     !validEmail || !validName || !validPhone ? true : false
                // }
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
