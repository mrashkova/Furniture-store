import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

const ProductItem = ({ _id, name, category, price, imageUrl }) => {
  return (
    <div key={_id} className="col-sm-3">
      <Link to={`/furniture/${_id}`} className={styles.singleProduct}>
        <div>
          <div className={styles.singleProductTxt}>
            <img src={imageUrl} alt={`${name} image`} />
            <h3>{name}</h3>
            <p className="allProducts-category">{category}</p>
            <h5>${price}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
