// import { useEffect, useState } from "react";
// import React from "react";
// import { Carousel } from "react-bootstrap";

// import * as furnitureService from "../../../services/furnitureService";
import styles from "./HomeCarousel.module.css";
import { Link } from "react-router-dom";

// import CarouselItem from "./CarouselItem";

// function HomeCarousel() {
//   const [welcomeProducts, setWelcomeProducts] = useState([]);

//   useEffect(() => {
//     furnitureService.getTopThree().then((result) => {
//       setWelcomeProducts(result);
//       console.log("Welcome products:", result);
//     });
//   }, []);

//   return (
//     <Carousel data-bs-theme="dark">
//       {welcomeProducts.length > 0 ? (
//         welcomeProducts.map((welcomeProduct) => (
//           <CarouselItem key={welcomeProduct._id} {...welcomeProduct} />
//         ))
//       ) : (
//         <p>No welcome products available.</p>
//       )}
//     </Carousel>
//   );
// }

// export default HomeCarousel;

import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import * as furnitureService from "../../../services/furnitureService";

function HomeCarousel() {
  const [welcomeProducts, setWelcomeProducts] = useState([]);

  useEffect(() => {
    furnitureService.getTopThree().then((result) => {
      setWelcomeProducts(result);
    });
  }, []);

  return (
    <Carousel data-bs-theme="dark" className={styles.carousel}>
      {welcomeProducts.map((welcomeProduct) => (
        <Carousel.Item key={welcomeProduct._id}>
          {/* <img
            className="d-block w-100"
            src={welcomeProduct.imageUrl}
            alt={`${welcomeProduct.name} image`}
          /> */}
          <img
            className={styles.welcomeImg}
            src={welcomeProduct.imageUrl}
            alt={`${welcomeProduct.name} image`}
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <div className={styles.welcomeTxt}>
              <h4>{welcomeProduct.name}</h4>
              <h2>{welcomeProduct.category}</h2>
              <p className={styles.description}>{welcomeProduct.description}</p>
              <div>
                <p>{welcomeProduct.price}</p>
              </div>
              <button className="btn-cart welcome-add-cart">
                <span className="lnr lnr-plus-circle"></span>
                add <span>to</span> cart
              </button>
              <Link
                to={`/furniture/${welcomeProduct._id}`}
                className="btn-cart welcome-add-cart welcome-more-info"
              >
                Details
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HomeCarousel;
