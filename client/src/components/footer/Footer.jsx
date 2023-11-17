import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className="hm-footer-copyright text-center">
          <div className={styles.footerSocial}>
            <a href="https://www.linkedin.com/in/mrashkova/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/mrashkova">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <p>&copy;copyright. designed and developed by Mariya Rashkova </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top">
          <i
            className="fa fa-angle-up "
            id="scroll-top"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Back to Top"
            aria-hidden="true"
          ></i>
        </div>
      </div>
    </footer>
  );
}
