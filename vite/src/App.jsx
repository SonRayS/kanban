import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import AuthorizationPage from "./pages/AuthorizationPage/AuthorizationPage";
import CardPage from "./pages/CardPage/CardPage";
import ExitPage from "./pages/ExitPage/ExitPage";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NewCardPage from "./pages/NewCard/NewCard";
import "./App.css";

function App() {
    return (
        <Routes>
            {/* --------------PRIVATE ROUTE----------- */}
            <Route element={<PrivateRoute />}>
                <Route
                    path={AppRoutes.PAGE_MAIN}
                    element={<MainPage />}
                >
                    <Route
                        path={AppRoutes.PAGE_CARD}
                        element={<CardPage />}
                    />
                    <Route
                        path={AppRoutes.PAGE_EXIT}
                        element={<ExitPage />}
                    />
                </Route>
            </Route>
            {/* -----------------PRIVATE ROUTE------------- */}
            <Route
                path={AppRoutes.PAGE_MAIN}
                element={<MainPage />}
            />
            <Route
                path={AppRoutes.PAGE_AUTHORIZATION}
                element={<AuthorizationPage />}
            />
            Ы
            <Route
                path={AppRoutes.PAGE_TASK}
                element={<NewCardPage />}
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
