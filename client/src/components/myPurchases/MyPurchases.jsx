import React, { useEffect, useState, useContext } from "react";

import * as furnitureService from "../../services/furnitureService";
import AuthContext from "../../contexts/authContext";
import ProductItem from "../catalogue/productItem/ProductItem";
import styles from "./MyPuchases.module.css";

const MyPurchases = () => {
  const { userId } = useContext(AuthContext);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  useEffect(() => {
    const fetchPurchasedProducts = async () => {
      try {
        // Fetch products that the user has bought
        const purchasedProductsData = await furnitureService.getMyPurchases(
          userId
        );
        setPurchasedProducts(purchasedProductsData);
      } catch (error) {
        console.error("Error fetching purchased products:", error);
      }
    };

    // Only fetch if the user is logged in
    if (userId) {
      fetchPurchasedProducts();
    }
  }, [userId]);

  return (
    <section id="myPurchases" className={styles.myPurchases}>
      <div className="container">
        <div className="section-header">
          <h2>My Purchases</h2>
        </div>

        <div className={styles.myPurchasesContent}>
          <div className="row">
            {purchasedProducts.map((product) => (
              <ProductItem key={product._id} {...product} />
            ))}
            {purchasedProducts.length === 0 && (
              <h3 className={styles.noProducts}>
                You have not made any purchases yet.
              </h3>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPurchases;
