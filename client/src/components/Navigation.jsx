import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Furniture Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/new-arrivals">
              New Arrivals
            </Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products/all-products">
                All products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/products/sofas">
                Sofas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/tables">
                Tables
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/chairs">
                Chairs
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/products/beds">
                Beds
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
