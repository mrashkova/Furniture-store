import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerSocial}>
          <p>&copy; Designed and developed by Mariya Rashkova </p>
        </div>
      </div>
    </footer>
  );
}
