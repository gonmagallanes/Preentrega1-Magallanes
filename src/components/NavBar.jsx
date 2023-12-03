import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{color:"red"}}>Futura NBA Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><a style={{color:'black'}} href="#">Inicio</a></Nav.Link>
            <Nav.Link href="#link"><a style={{color:'black'}} target='blank' href="https://gonmagallanes.github.io/NBA_Store/">Contactanos</a></Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Camisetas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Zapatillas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Conjuntos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                WNBA
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  )
}

export default NavBar