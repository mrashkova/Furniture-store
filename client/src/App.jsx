import { Routes, Route } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Home from "./components/home/Home";
import AllProducts from "./components/categories/AllProducts";
import Sofas from "./components/categories/Sofas";
import Tables from "./components/categories/Tables";
import Chairs from "./components/categories/Chairs";
import Beds from "./components/categories/Beds";
import Contact from "./components/contacts/Contact";
import NewArrivals from "./components/NewArrivals";
import Create from "./components/products/create/Create";
import Blog from "./components/Blog";
import Footer from "./components/footer/Footer";

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
        <Route path="/create" element={<Create />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
