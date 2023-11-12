import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AllProducts from "./components/Products/AllProducts";
import Sofas from "./components/Products/Sofas";
import Tables from "./components/Products/Tables";
import Chairs from "./components/Products/Chairs";
import Beds from "./components/Products/Beds";
import Contact from "./components/Contact";
import NewArrivals from "./components/NewArrivals";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route path="all-products" element={<AllProducts />} />
          <Route path="sofas" element={<Sofas />} />
          <Route path="tables" element={<Tables />} />
          <Route path="chairs" element={<Chairs />} />
          <Route path="beds" element={<Beds />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
