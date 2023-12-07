import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/authContext";

export default function AuthGuard(props) {
  const { isAuthenticated, user } = useContext(AuthContext);

  const isOwner = user && product.ownerId === user.id;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isOwner) {
    // Redirect to 404 page if the user is not the owner
    return <Navigate to="/404" />;
  }

  return <Outlet />;
}
