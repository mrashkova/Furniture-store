import { useEffect, useState } from "react";

import * as furnitureService from "../../services/furnitureService";
import styles from "./Catalogue.module.css";

import ProductItem from "./productItem/ProductItem";

const Catalogue = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    furnitureService.getAll().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <section id="allProducts" className="allProducts">
      <div className="container">
        <div className="section-header">
          <h2>Products</h2>
        </div>

        <div className="allProducts-content">
          <div className="row">
            {products.map((product, _id) => (
              <ProductItem key={_id} {...product} />
            ))}
            {products.length === 0 && (
              <h3 className={styles.noProducts}>There are no products yet.</h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
