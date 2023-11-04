import { useEffect, useState } from "react";
import * as productServise from "../../../services/productService";

const ProductDetailsModal = ({ productId }) => {
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    productServise
      .getOne(productId)
      .then((result) => setProductDetails(result))
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <section id="singleProduct" className="single-product">
      <div className="single-product">
        <div className="single-product-txt text-center">
          <img
            src={productDetails.imageUrl}
            alt={`${productDetails.name} image`}
          />
          <p>{productDetails.articleNumber}</p>

          <h3>{productDetails.name}</h3>
          <p className="allProducts-category">{productDetails.category}</p>
          <h5>{productDetails.price}</h5>
          <h5 className="price-before">{productDetails.priceBefore}</h5>
          <p>{productDetails.description}</p>
          <h5>Measurements:</h5>
          <p>Width: {productDetails.measurements.width} cm</p>
          <p>Depth: {productDetails.measurements.depth} cm</p>
          <p>Height: {productDetails.measurements.height} cm</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsModal;
