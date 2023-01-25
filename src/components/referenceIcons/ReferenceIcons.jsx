import "./referenceIcons.css";
import { FaMapMarkedAlt, FaFilePdf } from "react-icons/fa";
import { IoHelpCircle } from "react-icons/io5";
import ReferenceTooltip from "../tooltip/referenceTooltip/referenceTooltip";

function ReferenceIcons() {
    const style = {
        width: "35px",
        height: "35px",
    };
    return (
        <div className="reference-icons">
            <ReferenceTooltip title="Ayuda">
                <span>
                    <IoHelpCircle style={style} />
                </span>
            </ReferenceTooltip>
            <ReferenceTooltip title="Mapa">
                <span>
                    <FaMapMarkedAlt style={style} />
                </span>
            </ReferenceTooltip>
            <ReferenceTooltip title="Normativa ABEN">
                <span>
                    <FaFilePdf style={style} />
                </span>
            </ReferenceTooltip>
        </div>
    );
}

export default ReferenceIcons;
