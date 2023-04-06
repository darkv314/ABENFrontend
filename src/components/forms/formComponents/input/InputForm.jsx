import ErrMsg from "../errMsg/ErrMsg";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./inputForm.css";
import { useFormContext } from "react-hook-form";

function InputForm({ id, label, type, validations, value, options }) {
    const [showPassword, setShowPassword] = useState(false);
    const { register, errors } = useFormContext();
    return (
        <div className="input-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={id}>{label}</label>

            {type === "password" ? (
                <div
                    className="password"
                    style={errors[id] ? { outline: "2px solid red" } : null}
                >
                    <input
                        type={showPassword ? "text" : "password"}
                        {...register(id, validations)}
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                </div>
            ) : type === "text" || type === "number" ? (
                <input
                    style={errors[id] ? { outline: "2px solid red" } : null}
                    type={type}
                    defaultValue={value}
                    {...register(id, validations)}
                />
            ) : (
                <select {...register(id)}>
                    {options?.map((option) => (
                        <option value={option.nombre}>{option.nombre}</option>
                    ))}
                </select>
            )}
            <ErrMsg errors={errors[id]} />
        </div>
    );
}

export default InputForm;
