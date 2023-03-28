import Login from "./pages/public/login/Login";
import Unauthorized from "./pages/public/unauthorized/Unauthorized";
import Missing from "./pages/public/missing/Missing";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/public/layout/Layout";
import RequireAuth from "./RequireAuth";
import Inicio from "./pages/cliente/inicio/Inicio";
import Servicios, {
    ServiciosDescripcion,
} from "./pages/cliente/servicios/Servicios";
import LoginForm from "./components/forms/loginForms/loginForm/LoginForm";
import RegisterForm from "./components/forms/loginForms/registerForm/RegisterForm";
import NewPasswordForm from "./components/forms/loginForms/newPasswordForm/NewPasswordForm";
import PasswordForm from "./components/forms/loginForms/passwordForm/PasswordForm";
import ServiciosForm from "./components/forms/serviciosForms/ServiciosForm";
import Carrito from "./pages/cliente/carrito/Carrito";
import InicioLab from "./pages/lab/inicio-lab/InicioLab";
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
                    <Route path="" element={<ServiciosDescripcion />} />
                    <Route element={<RequireAuth allowedRoles={["cliente"]} />}>
                        <Route
                            path="formulario/:id"
                            element={<ServiciosForm />}
                        />
                    </Route>
                </Route>
                {/* Protected Routes */}
                <Route element={<RequireAuth allowedRoles={["cliente"]} />}>
                    <Route path="inicio" element={<Inicio />} />
                    <Route path="carrito" element={<Carrito />} />
                    {/* <Route path="/" element={<Inicio />} /> */}
                </Route>

                <Route element={<RequireAuth allowedRoles={["lab"]} />}>
                    <Route path="inicio-lab" element={<InicioLab />} />
                </Route>
                {/* Missing */}
            </Route>
            <Route path="*" element={<Missing />} />
        </Routes>
    );
}

export default App;
