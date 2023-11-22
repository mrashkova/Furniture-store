import { Link } from "react-router-dom";
import { useContext } from "react";

import Path from "../../constants/paths";
import AuthContext from "../../contexts/authContext";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Furniture Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={Path.Home}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={Path.Catalogue}>
              Catalogue
            </Nav.Link>
            <Nav.Link as={Link} to={Path.Blog}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to={Path.NewArrivals}>
              New Arrivals
            </Nav.Link>
            <Nav.Link as={Link} to={Path.AboutUs}>
              About Us
            </Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to={Path.Create}>
                  Add new product
                </Nav.Link>
                <Nav.Link as={Link} to={Path.Logout}>
                  Logout
                </Nav.Link>
              </>
            )}

            {!isAuthenticated && (
              <>
                <Nav.Link as={Link} to={Path.Login}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={Path.Register}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
