import { Link } from "react-router-dom";

const ProductItem = ({
  _id,
  name,
  category,
  price,
  imageUrl,
  onDeleteClick,
}) => {
  const deleteClickHandler = () => {
    onDeleteClick(_id);
  };

  return (
    <div className="col-sm-3">
      <div className="single-product">
        <div className="single-product-txt text-center">
          <img src={imageUrl} alt={`${name} image`} />
          <h3>{name}</h3>
          <p className="allProducts-category">{category}</p>
          <h5>{price}</h5>
        </div>
        <Link to={`/product/${_id}`}>Details</Link>
        <button onClick={deleteClickHandler}>Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
