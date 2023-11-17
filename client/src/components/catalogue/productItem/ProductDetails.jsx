import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as furnitureService from "../../../services/furnitureService";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    furnitureService.getOne(productId).then(setProduct);
    // .catch((error) => console.log(error));
  }, [productId]);

  return (
    <section id="singleProduct" className="single-product">
      <div className="single-product">
        <div className="single-product-txt text-center">
          <img src={product.imageUrl} alt={product._id} />
          <p>{product.articleNumber}</p>

          <h3>{product.name}</h3>
          <p className="allProducts-category">{product.category}</p>
          <h5>{product.price}</h5>
          <h5 className="price-before">{product.priceBefore}</h5>
          <p>{product.description}</p>
          <h5>Measurements:</h5>
          <p>Width: {product.measurements?.width} cm</p>
          <p>Depth: {product.measurements?.depth} cm</p>
          <p>Height: {product.measurements?.height} cm</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;