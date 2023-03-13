import InputForm from "../../../../components/forms/input/InputForm";
import { useForm } from "react-hook-form";
import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../../../helpers/helpers";
import { useParams } from "react-router";

import "./formulario.css";
import ActionButton from "../../../../components/buttons/actionButton/ActionButton";
import useAuth from "../../../../hooks/useAuth";

function Formulario() {
    return (
        <div className="servicios-form">
            <div className="personal">
                <InformacionPersonal />
            </div>
        </div>
    );
}

export default Formulario;

function InformacionPersonal() {
    const { auth } = useAuth();
    const { nombre, email, nit } = auth;
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Información personal</h2>
            <InputForm
                register={register}
                errors={errors.nombre}
                id="nombre"
                label="Nombre de la institución"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
                value={nombre}
            />
            <InputForm
                register={register}
                errors={errors.email}
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
                value={email}
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
                value={nit}
            />
            <InputForm
                register={register}
                errors={errors.dir}
                id="dir"
                label="Dirección"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />

            {id === "2" ? (
                <InputForm
                    register={register}
                    errors={errors.riesgo}
                    id="riesgo"
                    label="Actividad asociada al riesgo de irradiación"
                    type="text"
                    validations={{
                        required: errMsgRequired,
                    }}
                />
            ) : null}

            <ActionButton>Siguiente</ActionButton>
        </form>
    );
}
