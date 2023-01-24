import Login from "./pages/public/login/Login";
import Unauthorized from "./pages/public/unauthorized/Unauthorized";
import Missing from "./pages/public/missing/Missing";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/public/layout/Layout";
import RequireAuth from "./RequireAuth";
import Home from "./pages/Home/Home";
const roles = ["admin", "user", "lab"];

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {/*Public routes*/}
                <Route path="login" element={<Login />} />
                <Route path="unauthorized" element={<Unauthorized />} />
                {/* Protected Routes */}
                <Route element={<RequireAuth allowedRoles={roles} />}>
                    <Route path="/" element={<Home />}></Route>
                </Route>
                {/* Missing */}
                <Route path="missing" element={<Missing />} />
            </Route>
        </Routes>
    );
}

export default App;
