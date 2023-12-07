import styles from "./HomeCarousel.module.css";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import * as furnitureService from "../../../services/furnitureService";

function HomeCarousel() {
  const [mostBoughtProducts, setMostBoughtProducts] = useState([]);

  useEffect(() => {
    // Fetch the top 3 most bought products
    furnitureService.getMostBought().then((result) => {
      setMostBoughtProducts(result);
    });
  }, []);

  return (
    <section className={styles.carouselContainer}>
      <Carousel data-bs-theme="dark" className={styles.carousel}>
        {mostBoughtProducts.map((mostBoughtProduct) => (
          <Carousel.Item key={mostBoughtProduct._id}>
            <img
              className={styles.welcomeImg}
              src={mostBoughtProduct.imageUrl}
              alt={`${mostBoughtProduct.name} image`}
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <div className={styles.welcomeTxt}>
                <h4>{mostBoughtProduct.name}</h4>
                <h2>{mostBoughtProduct.category}</h2>
                <p className={styles.description}>
                  {mostBoughtProduct.description}
                </p>
                <div>
                  <p>${mostBoughtProduct.price}</p>
                </div>

                <Link
                  to={`/furniture/${mostBoughtProduct._id}`}
                  className="btn-cart welcome-add-cart welcome-more-info"
                >
                  Details
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default HomeCarousel;
