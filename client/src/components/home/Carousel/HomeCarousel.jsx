import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import * as furnitureService from "../../../services/furnitureService";
import styles from "./HomeCarousel.module.css";

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
      <div className={styles.carouselBox}>
        <Carousel data-bs-theme="dark" className={styles.carousel}>
          {mostBoughtProducts.map((mostBoughtProduct) => (
            <Carousel.Item key={mostBoughtProduct._id}>
              <div className={styles.innerBox}>
                <div className={styles.imageBox}>
                  <img
                    className={styles.welcomeImg}
                    src={mostBoughtProduct.imageUrl}
                    alt={`${mostBoughtProduct.name} image`}
                  />
                </div>
                <div className={styles.textBox}>
                  <h4>{mostBoughtProduct.name}</h4>
                  <h2>{mostBoughtProduct.category}</h2>
                  <p className={styles.description}>
                    {mostBoughtProduct.description}
                  </p>
                  <div>
                    <p>${mostBoughtProduct.price}</p>
                  </div>
                  <a
                    href={`/furniture/${mostBoughtProduct._id}`}
                    className={styles.details}
                  >
                    Details
                  </a>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default HomeCarousel;
