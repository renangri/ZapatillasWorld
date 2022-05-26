import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

// este navbar es un componente sacado de react-bootstrap
const NavBar = () => {
  return (
    <Navbar
      className="Navigation"
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
      defaultactivekey="/home"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img alt="" height="50" className="text-decoration-none" />
            Inicio
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Container>
              <Link className="text-decoration-none" to="/about">
                Nosotros
              </Link>
            </Container>

            <Container>
              <Link className="text-decoration-none" to="/contact">
                Contacto
              </Link>
            </Container>
            <Container>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="text-decoration-none Link" to="#">
                    Remeras
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="Link" to="#">
                    Camperas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="Link" to="#">
                    Gorras
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Container>
          </Nav>
          <Nav>
            <Container>
              <Link className="Link" to="#">
                <CartWidget></CartWidget>
              </Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
