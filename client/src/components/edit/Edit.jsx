import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useForm from "../../hooks/useForm";
import * as furnitureService from "../../services/furnitureService";
import styles from "./Edit.module.css";

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

const Edit = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    imageUrl: "",
    price: "",
    width: "",
    depth: "",
    length: "",
  });

  useEffect(() => {
    furnitureService.getOne(productId).then((result) => {
      setProduct(result);
    });
  }, [productId]);

  const editProductSubmitHandler = async (values) => {
    try {
      await furnitureService.edit(productId, values);

      navigate("/furniture");
    } catch (err) {
      // Error notification
      console.log(err);
    }
  };

  const { values, onChange, onSubmit } = useForm(
    editProductSubmitHandler,
    product
  );
  return (
    <section className={styles.editPage}>
      <form id="edit" onSubmit={onSubmit}>
        <div className={styles.container}>
          <h3>Edit Product</h3>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="category">Category: </label>
          <input
            type="text"
            id="category"
            name="category"
            value={values.category}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={values.category}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="imageUrl">Image URL: </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={values.category}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
          />

          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            name="price"
            value={values.category}
            onChange={onChange}
            onBlur={() => console.log("onBlur")}
            // className={errors.price && styles.inputError}
          />
          {/* {errors.price && (
            <p className={styles.errorMessage}>{errors.price}</p>
          )} */}

          <h3>Measurements</h3>
          <div className={styles.measurements}>
            <div className={styles.width}>
              <label htmlFor="width">Width: </label>
              <input
                type="number"
                id="width"
                name="width"
                value={values.category}
                onChange={onChange}
                onBlur={() => console.log("onBlur")}
                // className={errors.width && styles.inputError}
              />
            </div>

            {/* {errors.width && (
            <p className={styles.errorMessage}>{errors.width}</p>
          )} */}

            <div className={styles.depth}>
              {" "}
              <label htmlFor="depth">Depth: </label>
              <input
                type="number"
                id="depth"
                name="depth"
                value={values.category}
                onChange={onChange}
                onBlur={() => console.log("onBlur")}
                // className={errors.depth && styles.inputError}
              />
            </div>

            {/* {errors.depth && (
            <p className={styles.errorMessage}>{errors.depth}</p>
          )} */}
            <div className={styles.height}>
              {" "}
              <label htmlFor="height">Height: </label>
              <input
                type="number"
                id="height"
                name="height"
                value={values.category}
                onChange={onChange}
                onBlur={() => console.log("onBlur")}
                // className={errors.height && styles.inputError}
              />
            </div>
          </div>
          {/* {errors.height && (
          <p className={styles.errorMessage}>{errors.height}</p>
        )} */}
          <div>
            <button type="submit">Edit</button>
            <button type="button">Reset</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Edit;
