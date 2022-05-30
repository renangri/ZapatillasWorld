import CartWidget from "../CartWidget/CartWidget";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './navBar.css';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { CartContext } from "../../Context/CartContext/CartContext";

// este navbar es un componente sacado de react-bootstrap
const NavBar = () => {
  let [items, setItems] = useContext(CartContext);

  let number = {
    color: "white",
    backgroundColor: "red",
    borderRadius: "50px",
    position: "relative",
    left: "15px",
  };

  let totalQuantity = 0;
  items.map((item) => (totalQuantity += item.quantity));

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
              {items.length > 0 ? (
                <div>
                  <Link className="Link" to="/cart">
                    <CartWidget></CartWidget>{" "}
                  </Link>
                  <h6 style={number}>{totalQuantity}</h6>
                </div>
              ) : (
                <div></div>
              )}
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
