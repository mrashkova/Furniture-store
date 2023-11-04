import PopularProducts from "./bodyComponents/PopularProducts";
import NewArrivals from "./bodyComponents/NewArrivals";
import Featured from "./bodyComponents/Featured";
import Blog from "./bodyComponents/Blog";
import Newsletter from "./bodyComponents/Newsletter";
// import SofaCollection from "./bodyComponents/SofaCollection";

export default function Body() {
  return (
    <>
      <PopularProducts />
      <NewArrivals />
      {/* <SofaCollection /> */}
      <Featured />
      <Blog />
      <Newsletter />
    </>
  );
}
