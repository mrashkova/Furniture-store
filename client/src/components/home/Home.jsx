import styles from "./Home.module.css";

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
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#header-carousel"
            data-slide-to="0"
            className="active"
          >
            <span className="small-circle"></span>
          </li>
          <li data-target="#header-carousel" data-slide-to="1">
            <span className="small-circle"></span>
          </li>
          <li data-target="#header-carousel" data-slide-to="2">
            <span className="small-circle"></span>
          </li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="single-slide-item slide1">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>cloth covered accent chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 399.00
                              <del>$ 499.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            // onClick="window.location.href='#'"
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            // onClick="window.location.href='#'"
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src="images/slider/slider1.png"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="single-slide-item slide2">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>mapple wood accent chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 199.00
                              <del>$ 299.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            // onClick="window.location.href='#'"
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            // onClick="window.location.href='#'"
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src="images/slider/slider2.png"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="single-slide-item slide3">
              <div className="container">
                <div className="welcome-hero-content">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-txt">
                          <h4>great design collection</h4>
                          <h2>valvet accent arm chair</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiuiana smod tempor ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip.
                          </p>
                          <div className="packages-price">
                            <p>
                              $ 299.00
                              <del>$ 399.00</del>
                            </p>
                          </div>
                          <button
                            className="btn-cart welcome-add-cart"
                            // onClick="window.location.href='#'"
                          >
                            <span className="lnr lnr-plus-circle"></span>
                            add <span>to</span> cart
                          </button>
                          <button
                            className="btn-cart welcome-add-cart welcome-more-info"
                            // onClick="window.location.href='#'"
                          >
                            more info
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="single-welcome-hero">
                        <div className="welcome-hero-img">
                          <img
                            src="images/slider/slider3.png"
                            alt="slider image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
