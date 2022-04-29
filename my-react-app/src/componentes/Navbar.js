import React  from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

 function Navbar1() {
    
  return(
     
    
<Navbar bg="dark" expand="lg"  variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">ZapasWorld</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Zapatillas</Nav.Link>
        <NavDropdown title="Ofertas" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Colecciones</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Remeras</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Otros
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Busqueda"
          className="me-2"
          aria-label="Search"
         
        />
        <Button variant="success" >Buscar</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
    );
}

export default Navbar1;
