import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import styles from "./HomeCarousel.module.css";

const CarouselItem = React.forwardRef(
  ({ _id, name, category, description, imageUrl, price }, ref) => {
    console.log(
      "CarouselItem props:",
      _id,
      name,
      category,
      description,
      imageUrl,
      price
    );
    return (
      <Carousel.Item ref={ref}>
        <div className={styles.welcomeImg}>
          <img src={imageUrl} alt={`${name} image`} />
        </div>
        <Carousel.Caption>
          <div className={styles.welcomeTxt}>
            <h4>{name}</h4>
            <h2>{category}</h2>
            <p>{description}</p>
            <div>
              <p>{price}</p>
            </div>
            <button className="btn-cart welcome-add-cart">
              <span className="lnr lnr-plus-circle"></span>
              add <span>to</span> cart
            </button>
            <Link
              to={`/furniture/${_id}`}
              className="btn-cart welcome-add-cart welcome-more-info"
            >
              Details
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
);

export default CarouselItem;
