import { Routes, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Home from "./components/home/Home";
import Catalogue from "./components/catalogue/Catalogue";
import ProductDetails from "./components/catalogue/productItem/ProductDetails";
import AboutUs from "./components/aboutUs/AboutUs";
import NewArrivals from "./components/NewArrivals";
import Create from "./components/create/Create";
import Blog from "./components/Blog";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/furniture" element={<Catalogue />} />
        <Route path="/furniture/:productId" element={<ProductDetails />} />
        <Route path="/create" element={<Create />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<AboutUs />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
