import CartWidget from "../CartWidget/CartWidget";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import { CartContext } from "../../Context/CartContext/CartContext";

// este navbar es un componente sacado de react-bootstrap
const NavBar = () => {
  let [items, setItems] = useContext(CartContext);

  const number = {
    color: "white",
    backgroundColor: "red",
    borderRadius: "50px",
    position: "relative",
    left: "15px",
  };

  const categories = {
    marginTop: "-8px",
  };

  let totalQuantity = 0;

  if (items.length > 0) items.map((item) => (totalQuantity += item.quantity));
  if (items.lenght === 0) totalQuantity = 0;

  return (
    <Navbar
      className="Navigation p-3"
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
      defaultactivekey="/home"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Container>
              <Link className="text-decoration-none" to="/">
                Inicio
              </Link>
            </Container>
            <Container style={categories}>
              <NavDropdown
                title={<span className="text-primary">Categorias</span>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link className="text-decoration-none" to="/category/urban">
                    Urbanas
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none" to="/category/running">
                    Running
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-decoration-none" to="/category/new">
                    Ultimos lanzamientos
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Container>
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
              <Link className="text-decoration-none" to="/orders">
                Ordenes
              </Link>
            </Container>
          </Nav>
          <Nav>
            <Container>
              {items.length > 0 ? (
                <div>
                  <Link className="Link" to="/cart">
                    <CartWidget></CartWidget>{" "}
                  </Link>
                  <p style={number}> {totalQuantity} </p>
                </div>
              ) : (
                <></>
              )}
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
