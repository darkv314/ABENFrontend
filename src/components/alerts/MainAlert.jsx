import ActionButton from "../buttons/actionButton/ActionButton";
import "./mainAlert.css";
import { AnimatePresence, motion } from "framer-motion";

function MainAlert({ title, description, children, onClose }) {
    const animation = {
        hidden: { y: -125, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 125, opacity: 1 },
    };

    return (
        <div className="alert-container">
            <AnimatePresence mode={"wait"}>
                <motion.div
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    transition={"0.45"}
                    exit="exit"
                    className="alert"
                >
                    <div className="alert-head">
                        <h2>{title}</h2>
                        <ActionButton type="button" handleClick={onClose}>
                            X
                        </ActionButton>
                    </div>

                    <p>{description}</p>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default MainAlert;
