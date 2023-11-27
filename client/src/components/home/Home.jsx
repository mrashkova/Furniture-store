import styles from "./Home.module.css";
import HomeCarousel from "./Carousel/HomeCarousel";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.welcomePage}>
        <div className={styles.welcomeHeader}>
          <h1 className={styles.pageTitle}>Welcome to Our Furniture Shop</h1>
          <p className={styles.subTitle}>
            Explore our stylish and comfortable furniture collection.
          </p>
        </div>
      </div>
      <HomeCarousel />
    </section>
  );
}
