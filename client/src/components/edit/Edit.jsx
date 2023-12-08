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
  const [missingFields, setMissingFields] = useState([]);

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

    // Check if any field is empty
    const emptyFields = Object.entries(product).filter(
      ([fieldName, value]) => !value && fieldName !== "imageUrl"
    );

    if (emptyFields.length > 0) {
      const emptyFieldNames = emptyFields.map(([fieldName]) => {
        return fieldName === "articleNumber" ? "Article Number" : fieldName;
      });
      setMissingFields(emptyFieldNames);
      return;
    }

    // Clear missing fields when the form is valid
    setMissingFields([]);

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
          />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={"Enter product name"}
            value={product.name}
            onChange={onChange}
          />

          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder={"Enter product category"}
            value={product.category}
            onChange={onChange}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder={"Enter product description"}
            value={product.description}
            onChange={onChange}
          />

          <label htmlFor="imageUrl">Image URL: </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder={"Enter product image URL"}
            value={product.imageUrl}
            onChange={onChange}
          />

          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder={"Enter product price"}
            value={product.price}
            onChange={onChange}
            onBlur={() =>
              furnitureService.validatePositiveNumber(
                createValues.price,
                "price",
                setErrors
              )
            }
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
                onBlur={() =>
                  furnitureService.validatePositiveNumber(
                    createValues.width,
                    "width",
                    setErrors
                  )
                }
                className={errors.width && styles.inputError}
              />
              {errors.width && (
                <p className={styles.errorMessage}>{errors.width}</p>
              )}
            </div>

            <div className={styles.depth}>
              {" "}
              <label htmlFor="depth">Depth: </label>
              <input
                type="number"
                id="depth"
                name="depth"
                value={product.measurements?.depth}
                onChange={onChange}
                onBlur={() =>
                  furnitureService.validatePositiveNumber(
                    createValues.depth,
                    "depth",
                    setErrors
                  )
                }
                className={errors.depth && styles.inputError}
              />
              {errors.depth && (
                <p className={styles.errorMessage}>{errors.depth}</p>
              )}
            </div>

            <div className={styles.height}>
              {" "}
              <label htmlFor="height">Height: </label>
              <input
                type="number"
                id="height"
                name="height"
                value={product.measurements?.height}
                onChange={onChange}
                onBlur={() =>
                  furnitureService.validatePositiveNumber(
                    createValues.height,
                    "height",
                    setErrors
                  )
                }
                className={errors.height && styles.inputError}
              />
              {errors.height && (
                <p className={styles.errorMessage}>{errors.height}</p>
              )}
            </div>
          </div>
          {missingFields.length > 0 && (
            <p className={styles.errorFilled}>Please fill all input fields!</p>
          )}

          <button className={styles.edit} type="submit">
            Edit
          </button>
          <button
            className={styles.reset}
            type="button"
            onClick={resetCreateFormHandler}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Edit;
