// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import * as authService from "./services/authServices";
import { AuthProvider } from "./contexts/authContext";
import Path from "./constants/paths";

import Navigation from "./components/header/Navigation";
import Home from "./components/home/Home";
import Catalogue from "./components/catalogue/Catalogue";
import ProductDetails from "./components/catalogue/productItem/ProductDetails";
import AboutUs from "./components/aboutUs/AboutUs";
import Create from "./components/create/Create";
import Edit from "./components/edit/Edit";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";

function App() {
  // const navigate = useNavigate();
  // const [auth, setAuth] = useState(() => {
  //   localStorage.removeItem("accessToken");

  //   return {};
  // });

  // const loginSubmitHandler = async (values) => {
  //   const result = await authService.login(values.email, values.password);

  //   setAuth(result);

  //   localStorage.setItem("accessToken", result.accessToken);

  //   navigate(Path.Home);
  // };

  // const registerSubmitHandler = async (values) => {
  //   const result = await authService.register(values.email, values.password);

  //   setAuth(result);

  //   localStorage.setItem("accessToken", result.accessToken);

  //   navigate(Path.Home);
  // };

  // const logoutHandler = () => {
  //   setAuth({});

  //   localStorage.removeItem("accessToken");
  // };

  // const values = {
  //   loginSubmitHandler,
  //   registerSubmitHandler,
  //   logoutHandler,
  //   username: auth.username || auth.email,
  //   email: auth.email,
  //   isAuthenticated: !!auth.accessToken,
  // };

  return (
    <AuthProvider>
      <Navigation />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Catalogue} element={<Catalogue />} />
        <Route path={Path.ProductDetails} element={<ProductDetails />} />
        <Route path={Path.Create} element={<Create />} />
        <Route path={Path.Edit} element={<Edit />} />
        <Route path={Path.AboutUs} element={<AboutUs />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Logout} element={<Logout />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
