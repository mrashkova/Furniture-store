import { useEffect, useState } from "react";

import * as furnitureService from "../../services/furnitureService";
import styles from "./Catalogue.module.css";

import ProductItem from "./productItem/ProductItem";
// import ProductDeleteModal from "../delete/DeleteModal";

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  // const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    furnitureService.getAll().then((result) => setProducts(result));
  }, []);

  // const deleteProductHandler = async (productId) => {
  //   const result = await furnitureService.remove(selectedProduct);
  //   setProducts((state) =>
  //     state.filter((product) => product._id !== selectedProduct)
  //   );

  //   setShowDelete(false);
  // };

  return (
    <section id="allProducts" className="allProducts">
      <div className="container">
        <div className="section-header">
          <h2>Products</h2>
        </div>

        <div className="allProducts-content">
          <div className="row">
            {products.map((product) => (
              <ProductItem key={product._id} {...product} />
            ))}

            {products.length === 0 && (
              <h3 className={styles.noProducts}>There are no products yet.</h3>
            )}

            {/* {showDelete && (
              <ProductDeleteModal
                onClose={() => setShowDelete(false)}
                onDelete={deleteProductHandler}
              />
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
