import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./contexts/authContext";
import Path from "./constants/paths";
import AuthGuard from "./components/guards/AuthGuard";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Catalogue from "./components/catalogue/Catalogue";
import ProductDetails from "./components/catalogue/productItem/ProductDetails";
import AboutUs from "./components/aboutUs/AboutUs";
import Create from "./components/create/Create";
import MyPurchases from "./components/myPurchases/myPurchases";
import Edit from "./components/edit/Edit";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Catalogue} element={<Catalogue />} />
        <Route path={Path.ProductDetails} element={<ProductDetails />} />
        <Route path={Path.AboutUs} element={<AboutUs />} />
        <Route path={Path.MyPurchases} element={<MyPurchases />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path={Path.Logout} element={<Logout />} />

        {/* Apply AuthGuard selectively to routes that require authentication */}
        <Route element={<AuthGuard />}>
          <Route path={Path.Create} element={<Create />} />
          <Route path={Path.Edit} element={<Edit />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
