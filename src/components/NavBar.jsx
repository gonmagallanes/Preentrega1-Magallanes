import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

import { useGetCategory } from "../hooks/useProducts";
import { CreateProduct } from "../pages/CreateProduct";

const NavBar = () => {
  const { categories } = useGetCategory();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={"/"} style={{ color: "red" }}>
          Preentrega2-Magallanes 🌹
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.ItemText key={index}>
                    <Link to={`/category/${category}`}>
                      {category}
                    </Link>
                  </NavDropdown.ItemText>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link style={{marginRight:'20px'}} to='/create-product'>Crear Producto nuevo</Link>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
