import { createContext, useState } from "react";

const ShoppingCartContext = createContext({});

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState({ count: 0, servicios: [] });

    return (
        <ShoppingCartContext.Provider value={{ cart, setCart }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartContext;
