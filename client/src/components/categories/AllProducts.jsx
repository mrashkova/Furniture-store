import { useEffect, useState } from "react";

import * as productService from "../../services/productService";

import ProductItem from "../products/productItem/ProductItem";
import ProductDeleteModal from "../products/delete/DeleteModal";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    productService
      .getAllProducts()
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  const deleteProductClickHandler = async (productId) => {
    setSelectedProduct(productId);
    setShowDelete(true);
  };

  const deleteProductHandler = async (productId) => {
    const result = await productService.remove(selectedProduct);
    setProducts((state) =>
      state.filter((product) => product._id !== selectedProduct)
    );

    setShowDelete(false);
  };

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
              <h3 className="no-articles">No products yet.</h3>
            )}

            {showDelete && (
              <ProductDeleteModal
                onClose={() => setShowDelete(false)}
                onDelete={deleteProductHandler}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
