import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import * as furnitureService from "../../../services/furnitureService";
import styles from "./ProductDetails.module.css";
import Path from "../../../constants/paths";
import pathToUrl from "../../../utils/pathUtils";
import AuthContext from "../../../contexts/authContext";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const [showMeasurements, setShowMeasurements] = useState(true);

  useEffect(() => {
    furnitureService
      .getOne(productId)
      .then((data) => {
        console.log(data); // Log the product data
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, [productId]);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete the product - ${product.name}?`
    );

    if (hasConfirmed) {
      await furnitureService.remove(productId);

      navigate("/furniture");
    }
  };

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
          {showMeasurements && (
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
          )}

          <div className={styles.buttons}>
            {userId && userId !== product._ownerId && (
              <div className={styles.customerButton}>
                <Link
                  to={pathToUrl(Path.Delete, { productId })}
                  className={styles.buy}
                >
                  Buy
                </Link>
              </div>
            )}
            {userId === product._ownerId && (
              <div className={styles.adminButtons}>
                <Link
                  to={pathToUrl(Path.Edit, { productId })}
                  className={styles.edit}
                >
                  Edit
                </Link>
                <button
                  to={pathToUrl(Path.Delete, { productId })}
                  className={styles.delete}
                  onClick={deleteButtonClickHandler}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
