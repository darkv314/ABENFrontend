import "./referenceIcons.css";
import { FaMapMarkedAlt, FaFilePdf } from "react-icons/fa";
import { IoHelpCircle } from "react-icons/io5";
import ReferenceTooltip from "../tooltip/referenceTooltip/referenceTooltip";
import { motion } from "framer-motion";

function ReferenceIcons() {
    const style = {
        width: "25px",
        height: "25px",
    };
    return (
        <div className="reference-icons">
            <ReferenceTooltip title="Ayuda">
                <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IoHelpCircle style={style} />
                </motion.span>
            </ReferenceTooltip>
            <ReferenceTooltip title="Mapa">
                <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaMapMarkedAlt style={style} />
                </motion.span>
            </ReferenceTooltip>
            <ReferenceTooltip title="Normativa ABEN">
                <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaFilePdf style={style} />
                </motion.span>
            </ReferenceTooltip>
        </div>
    );
}

export default ReferenceIcons;
