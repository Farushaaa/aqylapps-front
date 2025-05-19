import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/UseAuthStore";
import { LocalStorage } from "../utils/localstorage";

const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const accessToken = LocalStorage.getAccessToken();
  if (!isAuthenticated || accessToken === null) {
    return <Navigate to="/sign-in" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
