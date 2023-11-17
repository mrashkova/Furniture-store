import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = ({
  _id,
  name,
  category,
  price,
  imageUrl,
  // onDeleteClick,
}) => {
  // const deleteClickHandler = () => {
  //   onDeleteClick(_id);
  // };

  return (
    <div className="col-sm-3">
      <Link to={`/furniture/${_id}`} className={styles.singleProduct}>
        <div className="single-product">
          <div className="single-product-txt text-center">
            <img src={imageUrl} alt={`${name} image`} />
            <h3>{name}</h3>
            <p className="allProducts-category">{category}</p>
            <h5>{price}</h5>
          </div>
        </div>
      </Link>

      {/* <button onClick={deleteClickHandler}>Delete</button> */}
    </div>
  );
};

export default ProductItem;
