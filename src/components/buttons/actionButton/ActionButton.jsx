import { motion } from "framer-motion";
import "./actionButton.css";

function ActionButton({ handleClick, children, type, disabled }) {
    function onClick(e) {
        e.stopPropagation();
        handleClick ? handleClick() : null;
    }
    return (
        <motion.button
            type={type || "submit"}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            onClick={(e) => {
                onClick(e);
            }}
            className="loginForm-button"
            disabled={disabled || false}
        >
            {children}
        </motion.button>
    );
}

export default ActionButton;
