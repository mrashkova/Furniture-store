import { useEffect, useState } from "react";

import * as productService from "../../services/productService";

import ProductItem from "./ProductItem";
import CreateProductModal from "./CRUD/CreateProductModal";
import ProductDetailsModal from "./CRUD/ProductDetailsModal";
import ProductDeleteModal from "./CRUD/ProductDeleteModal";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    productService
      .getAllProducts()
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  const createProductClickHandler = () => {
    setShowCreate(true);
  };

  const hideCreateProductModal = () => {
    setShowCreate(false);
  };

  const productCreateHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    const newProduct = await productService.create(data);
    setProducts((state) => [...state, newProduct]);
    setShowCreate(false);
  };

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
          <h2>Products</h2>
        </div>

        <button onClick={createProductClickHandler}>Add new product</button>

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

            {showCreate && (
              <CreateProductModal
                onClose={hideCreateProductModal}
                onProductCreate={productCreateHandler}
              />
            )}

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

export default AllProducts;
