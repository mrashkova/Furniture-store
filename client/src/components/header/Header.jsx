import { Link } from "react-router-dom";
import { useContext } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Path from "../../constants/paths";
import AuthContext from "../../contexts/authContext";
import styles from "./Header.module.css";

export default function Header() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <header>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className={styles.brand}>
            Furniture Store
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
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
                <Nav.Link as={Link} to={Path.Logout} className={styles.logout}>
                  Logout
                </Nav.Link>
              )}
              {!isAuthenticated && (
                <>
                  <Nav.Link as={Link} to={Path.Login} className={styles.login}>
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to={Path.Register}
                    className={styles.register}
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
