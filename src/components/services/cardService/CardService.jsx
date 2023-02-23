import "./cardService.css";
import { motion } from "framer-motion";

function CardService({ title, img }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.975 }}
            className="card-service"
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <div className="card-text">
                <h4>{title}</h4>
            </div>
        </motion.div>
    );
}

export default CardService;
