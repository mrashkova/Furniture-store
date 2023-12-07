import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function AuthGuard({ product }) {
  const { isAuthenticated, user } = useContext(AuthContext);

  // Check if the user is logged in for the Create page
  if (!product && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check if the user is the owner of the product for the Edit page
  if (product && user && product._ownerId !== user.id) {
    return <Navigate to="/404" />;
  }

  // If the user is authenticated and the owner (or for Create), allow access to the nested routes
  return <Outlet />;
}
