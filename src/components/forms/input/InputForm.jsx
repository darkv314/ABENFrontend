import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./inputForm.css";

function InputForm({ id, label, type }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="input-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={id}>{label}</label>

            {type === "password" ? (
                <div className="password">
                    <input type={showPassword ? "text" : "password"} required />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </button>
                </div>
            ) : (
                <input type={type} required />
            )}
        </div>
    );
}

export default InputForm;
