import { useContext } from "react";
import LogisticaContext from "../context/LogisticaProvider";

const useLogistica = () => {
    return useContext(LogisticaContext);
};

export default useLogistica;
