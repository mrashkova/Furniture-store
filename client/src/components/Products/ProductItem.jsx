const ProductItem = ({
  productId,
  name,
  category,
  price,
  priceBefore,
  imageUrl,
  onProductDetailsClick,
  onDeleteClick,
}) => {
  const detailsClickHandler = () => {
    onProductDetailsClick(productId);
  };

  const deleteClickHandler = () => {
    onDeleteClick(productId);
  };

  return (
    <div className="col-sm-3">
      <div className="single-product">
        <div className="single-product-txt text-center">
          <img src={imageUrl} alt={`${name} image`} />
          <h3>{name}</h3>
          <p className="allProducts-category">{category}</p>
          <h5>{price}</h5>
          <h5 className="price-before">{priceBefore}</h5>
        </div>
        <button onClick={detailsClickHandler}>Details</button>
        <button onClick={deleteClickHandler}>Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
