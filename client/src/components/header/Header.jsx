import { Link } from "react-router-dom";
import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Path from "../../constants/paths";
import AuthContext from "../../contexts/authContext";
import styles from "./Header.module.css";

export default function Header() {
  const { isAuthenticated, email, logoutHandler } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to={Path.Home} className={styles.brand}>
            Furniture Store
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav className={styles.leftNav}>
              <Nav.Link as={Link} to={Path.Home}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={Path.Catalogue}>
                Catalogue
              </Nav.Link>

              {isAuthenticated && (
                <>
                  <Nav.Link as={Link} to={Path.Create}>
                    Add new product
                  </Nav.Link>
                  <Nav.Link as={Link} to={Path.MyPurchases}>
                    My Purchases
                  </Nav.Link>
                </>
              )}

              <Nav.Link as={Link} to={Path.AboutUs}>
                About Us
              </Nav.Link>

              {isAuthenticated && (
                <Nav className={`ml-auto ${styles.rightNav}`}>
                  <Navbar.Text className={styles.userEmail}>
                    Logged in as: {email}
                  </Navbar.Text>
                  <Nav.Link
                    as={Link}
                    to={Path.Logout}
                    onClick={logoutHandler}
                    className={`${styles.login} ml-auto`}
                  >
                    Logout
                  </Nav.Link>
                </Nav>
              )}
              {!isAuthenticated && (
                <Nav className={`ml-auto ${styles.rightNavcontainer}`}>
                  <Nav.Link as={Link} to={Path.Login} className={styles.login}>
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={Path.Register}
                    className={`${styles.register} ml-auto`}
                  >
                    Register
                  </Nav.Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
