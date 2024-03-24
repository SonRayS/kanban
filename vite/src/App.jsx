import { Routes, Route, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import "./App.css";

/* 
    PAGE_MAIN: "/",
    PAGE_AUTHORIZATION: "/login",
    PAGE_REGISTRATION: "/registration",
    PAGE_CARD: "/card/:id",
    PAGE_EXIT: "/exit",
    PAGE_NOT_FOUND: "*",
    page_main
*/

function App() {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    function login(newUser) {
        setUser(newUser);
        navigate(AppRoutes.PAGE_MAIN);
    }
    function exit() {
        setUser(null);
        navigate(AppRoutes.PAGE_AUTHORIZATION);
    }

    return (
        <Routes>
            <Route element={<PrivateRoute user={user} />}>
                <Route
                    path={AppRoutes.PAGE_MAIN}
                    element={<MainPage user={user} />}
                >
                    <Route
                        path={AppRoutes.PAGE_CARD}
                        element={<CardPage />}
                    />
                    <Route
                        path={AppRoutes.PAGE_EXIT}
                        element={<ExitPage exit={exit} />}
                    />
                </Route>
            </Route>
            {/* ----------------------------------------- */}
            <Route
                path={AppRoutes.PAGE_MAIN}
                element={<MainPage />}
            />
            <Route
                path={AppRoutes.PAGE_AUTHORIZATION}
                element={<AuthorizationPage login={login} />}
            />
            <Route
                path={AppRoutes.PAGE_REGISTRATION}
                element={<RegistrationPage />}
            />
            <Route
                path={AppRoutes.PAGE_NOT_FOUND}
                element={<NotFoundPage />}
            />
        </Routes>
    );
}

export default App;
