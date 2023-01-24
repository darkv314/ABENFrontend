import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import { useLocation } from "react-router-dom";
import "./layout.css";

function Layout() {
    const location = useLocation();
    return (
        <main className="App">
            {location.pathname === "/login" ? (
                <Outlet />
            ) : (
                <div className="layout">
                    <Nav />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            )}
        </main>
    );
}

export default Layout;
