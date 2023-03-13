import Login from "./pages/public/login/Login";
import Unauthorized from "./pages/public/unauthorized/Unauthorized";
import Missing from "./pages/public/missing/Missing";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/public/layout/Layout";
import RequireAuth from "./RequireAuth";
import Inicio from "./pages/cliente/inicio/Inicio";
import Servicios, { ServiciosDes } from "./pages/cliente/servicios/Servicios";
import LoginForm from "./components/forms/loginForm/LoginForm";
import RegisterForm from "./components/forms/registerForm/RegisterForm";
import NewPasswordForm from "./components/forms/newPasswordForm/NewPasswordForm";
import PasswordForm from "./components/forms/passwordForm/PasswordForm";
import Formulario from "./pages/cliente/servicios/formulario/Formulario";
// import Home from "./pages/Home/Home";
const roles = ["admin", "user", "lab"];

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/*Public routes*/}
                <Route path="/" element={<Login />}>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/registro" element={<RegisterForm />} />
                    <Route path="/codigo" element={<PasswordForm />} />
                    <Route path="/password" element={<NewPasswordForm />} />
                </Route>
                <Route path="unauthorized" element={<Unauthorized />} />
                <Route path="servicio/:id" element={<Servicios />}>
                    <Route path="" element={<ServiciosDes />} />
                    <Route element={<RequireAuth allowedRoles={["cliente"]} />}>
                        <Route path="formulario/:id" element={<Formulario />} />
                    </Route>
                </Route>
                {/* Protected Routes */}
                <Route element={<RequireAuth allowedRoles={["cliente"]} />}>
                    <Route path="inicio" element={<Inicio />} />

                    {/* <Route path="/" element={<Inicio />} /> */}
                </Route>
                {/* Missing */}
            </Route>
            <Route path="*" element={<Missing />} />
        </Routes>
    );
}

export default App;
