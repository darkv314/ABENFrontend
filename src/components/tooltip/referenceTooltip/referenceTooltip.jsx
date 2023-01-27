import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const ReferenceTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#4ce0b3",
        color: "black",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

export default ReferenceTooltip;
