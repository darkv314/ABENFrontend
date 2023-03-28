import "./cardService.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CardService({ title, img, id }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/servicio/${id}`);
    }

    return (
        <motion.div
            tabIndex={0}
            onClick={handleClick}
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
