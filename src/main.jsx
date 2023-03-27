import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";

const client = new ApolloClient({
    uri: import.meta.env.VITE_BACKEND_URL,
    cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <AuthProvider>
                    <ShoppingCartProvider>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </ShoppingCartProvider>
                </AuthProvider>
            </BrowserRouter>
        </ApolloProvider>
    </React.StrictMode>
);
