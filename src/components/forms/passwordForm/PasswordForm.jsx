import { useState, useEffect } from "react";
import InputForm from "../input/InputForm";
import "../form.css";
import PhoneInput from "react-phone-input-2";
import { useForm } from "react-hook-form";
import { EMAIL_CHECK } from "../../../helpers/helpers";

function PasswordForm({ setStateForm }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(errors);

    return (
        <form
            onSubmit={handleSubmit((data) => {
                console.log(data);
            })}
        >
            <input
                {...register("name", {
                    required: "This is required",
                    minLength: 4,
                })}
                type="text"
                placeholder="name"
            />
            <input type="text" />
            <input type="submit" />
        </form>
    );
}

export default PasswordForm;
