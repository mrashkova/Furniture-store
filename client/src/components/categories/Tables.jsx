import { useEffect, useState } from "react";

import * as productService from "../../services/productService";

import ProductItem from "../products/productItem/ProductItem";
import ProductDetailsModal from "../products/productItem/ProductDetails";
import ProductDeleteModal from "../products/delete/DeleteModal";

const Tables = () => {
  const [products, setProducts] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    productService
      .getAllTables()
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  const productInfoClickHandler = async (productId) => {
    setSelectedProduct(productId);
    setShowInfo(true);
  };

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
          <h2>Tables</h2>
        </div>

        <div className="allProducts-content">
          <div className="row">
            {products.map((product) => (
              <ProductItem
                key={product._id}
                productId={product._id}
                name={product.name}
                category={product.category}
                price={product.price}
                priceBefore={product?.priceBefore}
                imageUrl={product.imageUrl}
                onProductDetailsClick={productInfoClickHandler}
                onDeleteClick={deleteProductClickHandler}
              />
            ))}

            {showInfo && (
              <ProductDetailsModal
                onClose={() => setShowInfo(false)}
                productId={selectedProduct}
              />
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

export default Tables;
