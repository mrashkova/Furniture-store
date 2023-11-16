import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as productServise from "../../../services/productService";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    productServise.getOne(productId).then(setProduct);
  }, [productId]);

  return (
    <section id="singleProduct" className="single-product">
      <div className="single-product">
        <div className="single-product-txt text-center">
          <img src={product.imageUrl} alt={`${product.name} image`} />
          <p>{productDetails.articleNumber}</p>

          <h3>{product.name}</h3>
          <p className="allProducts-category">{product.category}</p>
          <h5>{product.price}</h5>
          <h5 className="price-before">{product.priceBefore}</h5>
          <p>{product.description}</p>
          <h5>Measurements:</h5>
          <p>Width: {product.measurements.width} cm</p>
          <p>Depth: {product.measurements.depth} cm</p>
          <p>Height: {product.measurements.height} cm</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
