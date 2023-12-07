import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as furnitureService from "../../services/furnitureService";
import styles from "./Edit.module.css";

const Edit = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: "",
    measurements: {
      width: "",
      depth: "",
      height: "",
    },
  });
  const [initialState, setInitialState] = useState({
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: "",
    measurements: {
      width: "",
      depth: "",
      height: "",
    },
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    furnitureService.getOne(productId).then((result) => {
      setProduct(result);
      setInitialState(result);
    });
  }, [productId]);

  const resetCreateFormHandler = () => {
    setProduct(initialState);
    setErrors({});
  };

  const editProductSubmitHandler = async (e) => {
    e.preventDefault();

    const values = Object.fromEntries(new FormData(e.currentTarget));

    try {
      await furnitureService.edit(productId, values);
      const updatedProduct = await furnitureService.getOne(productId);
      setProduct(updatedProduct);

      navigate(`/furniture/${productId}`);
    } catch (err) {
      console.error("Error editing product:", err);

      if (err.response && err.response.data && err.response.data.message) {
        setErrors({ general: err.response.data.message });
      } else {
        setErrors({ general: "An error occurred while editing the product." });
      }
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "width" || name === "depth" || name === "height") {
      setProduct((prevProduct) => ({
        ...prevProduct,
        measurements: {
          ...prevProduct.measurements,
          [name]: value,
        },
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value,
      }));
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    // Validate the current field
    if (
      name === "price" ||
      name === "width" ||
      name === "depth" ||
      name === "height"
    ) {
      furnitureService.validatePositiveNumber(value, name, setErrors);
    }
  };

  return (
    <section className={styles.editPage}>
      <form id="edit" onSubmit={editProductSubmitHandler}>
        <div className={styles.container}>
          <h3>Edit Product</h3>
          <label htmlFor="articleNumber">Article Number: </label>
          <input
            type="text"
            id="articleNumber"
            name="articleNumber"
            value={product.articleNumber}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={"Enter product name"}
            value={product.name}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder={"Enter product category"}
            value={product.category}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder={"Enter product description"}
            value={product.description}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="imageUrl">Image URL: </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder={"Enter product image URL"}
            value={product.imageUrl}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder={"Enter product price"}
            value={product.price}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
            className={errors.price && styles.inputError}
          />
          {errors.price && (
            <p className={styles.errorMessage}>{errors.price}</p>
          )}

          <h3>Measurements</h3>
          <div className={styles.measurements}>
            <div className={styles.width}>
              <label htmlFor="width">Width: </label>
              <input
                type="number"
                id="width"
                name="width"
                value={product.measurements?.width}
                onChange={onChange}
                onBlur={() => console.log("onBlur")}
                className={errors.width && styles.inputError}
              />
            </div>

            {errors.width && (
              <p className={styles.errorMessage}>{errors.width}</p>
            )}

            <div className={styles.depth}>
              {" "}
              <label htmlFor="depth">Depth: </label>
              <input
                type="number"
                id="depth"
                name="depth"
                value={product.measurements?.depth}
                onChange={onChange}
                onBlur={() => console.log("onBlur")}
                className={errors.depth && styles.inputError}
              />
            </div>

            {errors.depth && (
              <p className={styles.errorMessage}>{errors.depth}</p>
            )}
            <div className={styles.height}>
              {" "}
              <label htmlFor="height">Height: </label>
              <input
                type="number"
                id="height"
                name="height"
                value={product.measurements?.height}
                onChange={onChange}
                onBlur={() => console.log("onBlur")}
                className={errors.height && styles.inputError}
              />
            </div>
          </div>
          {errors.height && (
            <p className={styles.errorMessage}>{errors.height}</p>
          )}
          <div>
            <button type="submit">Edit</button>
            <button type="button" onClick={resetCreateFormHandler}>
              Reset
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Edit;
