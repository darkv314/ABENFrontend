import { createContext, useState } from "react";

const LogisticaContext = createContext({});

export const LogisticaProvider = ({ children }) => {
    const [logistica, setLogistica] = useState(false);

    return (
        <LogisticaContext.Provider value={{ logistica, setLogistica }}>
            {children}
        </LogisticaContext.Provider>
    );
};

export default LogisticaContext;
