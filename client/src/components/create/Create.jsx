import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as furnitureService from "../../services/furnitureService";
import styles from "./Create.module.css";

const createInitialState = {
  name: "",
  category: "",
  description: "",
  imageUrl: "",
  price: "",
  width: "",
  depth: "",
  height: "",
};

const CreateProduct = ({ createRef }) => {
  const navigate = useNavigate();
  const articleInputRef = useRef();
  const isMountedRef = useRef(false);
  const [createValues, setCreateValues] = useState(createInitialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    articleInputRef.current.focus();
  }, []);

  // Executes only on update
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
  }, [createValues]);

  const createChangeHandler = (e) => {
    let value = "";

    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      default:
        value = e.target.value;
        break;
    }

    setCreateValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));

    // Immediately validate the input on change
    validateInput(e.target.name, value);
  };

  const validateInput = (fieldName, value) => {
    switch (fieldName) {
      case "price":
        furnitureService.validatePositiveNumber(value, fieldName, setErrors);
        break;
      case "height":
      case "width":
      case "depth":
        furnitureService.validatePositiveNumber(value, fieldName, setErrors);
        break;
      default:
        break;
    }
  };

  const createProductHandler = async (e) => {
    e.preventDefault();

    // Validate all inputs before submitting the form
    Object.entries(createValues).forEach(([fieldName, value]) => {
      validateInput(fieldName, value);
    });

    // Check if there are any validation errors before submitting
    if (Object.values(errors).some((x) => x)) {
      console.log("Form has errors. Cannot submit.");
      return;
    }

    const productData = {
      ...createValues,
      measurements: {
        width: createValues.width,
        depth: createValues.depth,
        height: createValues.height,
      },
    };

    try {
      const authToken = localStorage.getItem("authToken");

      await furnitureService.create(productData, userId);

      navigate("/furniture");
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  const resetCreateFormHandler = () => {
    setCreateValues(createInitialState);
    setErrors({});
  };

  return (
    <section className={styles.creatPage}>
      <form ref={createRef} id="create" onSubmit={createProductHandler}>
        <div className={styles.container}>
          <h3>Product Information</h3>
          <label htmlFor="name">Article Number: </label>
          <input
            ref={articleInputRef}
            type="number"
            id="articleNumber"
            name="articleNumber"
            value={createValues.articleNumber}
            onChange={createChangeHandler}
            onBlur={() => console.log("onBlur")}
          />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={createValues.name}
            onChange={createChangeHandler}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={createValues.category}
            onChange={createChangeHandler}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={createValues.description}
            onChange={createChangeHandler}
          />

          <label htmlFor="imageUrl">Image URL: </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            onChange={createChangeHandler}
            value={createValues.imageUrl}
          />

          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={createValues.price}
            onChange={createChangeHandler}
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

          <h4>Measurements</h4>
          <div className={styles.measurements}>
            <div className={styles.width}>
              <label htmlFor="width">Width: </label>
              <input
                type="number"
                id="width"
                name="width"
                value={createValues.width}
                onChange={createChangeHandler}
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
              <label htmlFor="depth">Depth: </label>
              <input
                type="number"
                id="depth"
                name="depth"
                value={createValues.depth}
                onChange={createChangeHandler}
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
                value={createValues.height}
                onChange={createChangeHandler}
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

          <button type="submit" disabled={Object.values(errors).some((x) => x)}>
            Add new product
          </button>
          <button type="button" onClick={resetCreateFormHandler}>
            Reset
          </button>
        </div>
        {errors.height && (
          <p className={styles.errorMessage}>{errors.height}</p>
        )}
      </form>
    </section>
  );
};

export default CreateProduct;
