import { Routes, Route, useNavigate } from "react-router-dom";
import Page_main from "./pages/Page_main/Page_main";
import Page_not_found from "./pages/Page_not_found/Page_not_found";
import Page_registration from "./pages/Page_registration/Page_registration";
import Page_author from "./pages/Page_authorization/Page_authorization";
import Page_card from "./pages/Page_card/Page_card";
import Page_exit from "./pages/Page_Exit/Page_exit";
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
*/

function App() {
    const [user, setUser] = useState(true);

    const navigate = useNavigate();

    function GoToMenu() {
        setUser(true);
        navigate(AppRoutes.PAGE_MAIN);
    }
    function Author() {
        setUser(true);
        navigate(AppRoutes.PAGE_EXIT);
    }

    return (
        <Routes>
            <Route element={<PrivateRoute user={user} />}>
                <Route
                    path={AppRoutes.PAGE_MAIN}
                    element={<Page_main />}
                >
                    <Route
                        path={AppRoutes.PAGE_CARD}
                        element={<Page_card />}
                    />
                    <Route
                        path={AppRoutes.PAGE_EXIT}
                        element={<Page_exit Author={Author} />}
                    />
                </Route>
            </Route>
            {/* ----------------------------------------- */}
            <Route
                path={AppRoutes.PAGE_MAIN}
                element={<Page_main />}
            />
            <Route
                path={AppRoutes.PAGE_AUTHORIZATION}
                element={<Page_author GoToMenu={GoToMenu} />}
            />
            <Route
                path={AppRoutes.PAGE_REGISTRATION}
                element={<Page_registration />}
            />
            <Route
                path={AppRoutes.PAGE_NOT_FOUND}
                element={<Page_not_found />}
            />
        </Routes>
    );
}

export default App;
