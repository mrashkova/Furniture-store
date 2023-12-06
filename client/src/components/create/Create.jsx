import { useState, useRef, useEffect } from "react";

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
  const nameInputRef = useRef();
  const isMountedRef = useRef(false);
  const [createValues, setCreateValues] = useState(createInitialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    nameInputRef.current.focus();
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
  };

  const resetCreateFormHandler = () => {
    setCreateValues(createInitialState);
    setErrors({});
  };

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    console.log(createValues);
    resetCreateFormHandler();
  };

  const priceValidator = () => {
    if (createValues.price <= 0) {
      setErrors((state) => ({
        ...state,
        price: "Price should be a positive number!",
      }));
    } else {
      if (errors.price) {
        setErrors((state) => ({ ...state, price: "" }));
      }
    }
  };

  const heightValidator = () => {
    if (createValues.height <= 0) {
      setErrors((state) => ({
        ...state,
        height: "Height should be a positive number!",
      }));
    } else {
      if (errors.height) {
        setErrors((state) => ({ ...state, height: "" }));
      }
    }
  };

  const widthValidator = () => {
    if (createValues.width <= 0) {
      setErrors((state) => ({
        ...state,
        width: "Width should be a positive number!",
      }));
    } else {
      if (errors.width) {
        setErrors((state) => ({ ...state, width: "" }));
      }
    }
  };

  const depthValidator = () => {
    if (createValues.depth <= 0) {
      setErrors((state) => ({
        ...state,
        depth: "Depth should be a positive number!",
      }));
    } else {
      if (errors.depth) {
        setErrors((state) => ({ ...state, depth: "" }));
      }
    }
  };

  return (
    <section className={styles.creatPage}>
      <form ref={createRef} id="create" onSubmit={createProductSubmitHandler}>
        <div className={styles.container}>
          <h3>Product Information</h3>
          <label htmlFor="name">Name: </label>
          <input
            ref={nameInputRef}
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
            onBlur={priceValidator}
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
                onBlur={widthValidator}
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
                onBlur={depthValidator}
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
                onBlur={heightValidator}
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
