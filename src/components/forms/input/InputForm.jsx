import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./inputForm.css";
import { motion, AnimatePresence } from "framer-motion";

function InputForm({ register, errors, id, label, type, validations }) {
    const [showPassword, setShowPassword] = useState(false);
    const animation = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <div className="input-form" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence initial={false} mode={"wait"}>
                {errors?.message && (
                    <motion.p
                        variants={animation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="error"
                    >
                        {errors?.message}
                    </motion.p>
                )}
            </AnimatePresence>

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
