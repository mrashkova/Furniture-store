import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as furnitureService from "../../../services/furnitureService";
import styles from "./ProductDetails.module.css";
import Path from "../../../constants/paths";
import pathToUrl from "../../../utils/pathUtils";
import AuthContext from "../../../contexts/authContext";

const ProductDetails = () => {
  const { userId } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    furnitureService.getOne(productId).then(setProduct);
    // .catch((error) => console.log(error));
  }, [productId]);

  return (
    <section id="singleProduct" className={styles.singleProduct}>
      <div className={styles.container}>
        <div className={styles.singleProductImg}>
          <img src={product.imageUrl} alt={product._id} />
        </div>

        <div className={styles.singleProductInfo}>
          <p>{product.articleNumber}</p>
          <h3>{product.name}</h3>
          <p className="allProducts-category">{product.category}</p>
          <h5>{product.price}</h5>
          <p>{product.description}</p>

          <h5>Measurements:</h5>
          <div className={styles.measurements}>
            <p className={styles.width}>
              Width: {product.measurements?.width} cm
            </p>
            <p className={styles.depth}>
              Depth: {product.measurements?.depth} cm
            </p>
            <p className={styles.height}>
              Height: {product.measurements?.height} cm
            </p>
          </div>

          {userId === product._ownerId && (
            <div className={styles.buttons}>
              <div className={styles.customerButton}>
                <Link
                  to={pathToUrl(Path.Delete, { productId })}
                  className={styles.buy}
                >
                  Buy
                </Link>
              </div>

              <div className={styles.adminButtons}>
                <Link
                  to={pathToUrl(Path.Edit, { productId })}
                  className={styles.edit}
                >
                  Edit
                </Link>
                <Link
                  to={pathToUrl(Path.Delete, { productId })}
                  className={styles.delete}
                >
                  Delete
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
