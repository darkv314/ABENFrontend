import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import { useLocation } from "react-router-dom";
import "./layout.css";

const login = ["/", "/registro", "/codigo", "/password"];
function Layout() {
    const location = useLocation();
    return (
        <main className="App">
            {login.includes(location.pathname) ? (
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
