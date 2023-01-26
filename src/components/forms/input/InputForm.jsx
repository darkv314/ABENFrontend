import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./inputForm.css";

function InputForm({ register, errors, id, label, type, validations }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="input-form" onSubmit={(e) => e.preventDefault()}>
            <p className="error">{errors?.message}</p>
            <label htmlFor={id}>{label}</label>

            {type === "password" ? (
                <div className="password">
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
                <input type={type} {...register(id, validations)} />
            )}
        </div>
    );
}

export default InputForm;
