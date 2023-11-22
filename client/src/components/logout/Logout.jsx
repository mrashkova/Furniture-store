import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import * as authService from "../../services/authServices";

import Path from "../../constants/paths";
import AuthContext from "../../contexts/authContext";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    authService
      .logout()
      .then(() => {
        logoutHandler();
        navigate(Path.Home);
      })
      .catch(() => navigate(Path.Home));
  }, []);

  return null;
}
