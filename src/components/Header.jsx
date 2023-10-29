import Carousel from "./headerComponents/Carousel";
import Navbar from "./headerComponents/Navbar";

export default function Header() {
  return (
    <header id="home" className="welcome-hero">
      <Carousel />
      <Navbar />
    </header>
  );
}
