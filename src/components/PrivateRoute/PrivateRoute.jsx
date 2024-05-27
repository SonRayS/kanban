import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import { useUser } from "../Hooks/useUser";

function PrivateRoute() {
    const { user } = useUser();
    return user ? <Outlet /> : <Navigate to={AppRoutes.PAGE_AUTHORIZATION} />;
}

export default PrivateRoute;
