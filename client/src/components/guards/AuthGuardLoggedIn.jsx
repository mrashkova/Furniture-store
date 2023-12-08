// AuthGuard for non-authenticated users
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import Path from "../../constants/paths";

export default function AuthGuardLoggedIn(props) {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to={Path.Home} />;
  }

  return <Outlet />;
}
