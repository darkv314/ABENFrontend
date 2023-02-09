import ErrMsg from "../errMsg/ErrMsg";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./inputForm.css";

function InputForm({ register, errors, id, label, type, validations }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="input-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={id}>{label}</label>

            {type === "password" ? (
                <div
                    className="password"
                    style={
                        errors?.message ? { outline: "2px solid red" } : null
                    }
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
            ) : (
                <input
                    style={
                        errors?.message ? { outline: "2px solid red" } : null
                    }
                    type={type}
                    {...register(id, validations)}
                />
            )}
            <ErrMsg errors={errors} />
        </div>
    );
}

export default InputForm;
