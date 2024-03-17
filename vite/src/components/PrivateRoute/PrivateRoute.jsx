import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../AppRoutes/AppRoutes";

function PrivateRoute({ user }) {
    return user ? <Outlet /> : <Navigate to={AppRoutes.PAGE_AUTHORIZATION} />;
}

export default PrivateRoute;
