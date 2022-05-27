import React from "react";
import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";




 
const Cart = () => {
  
  return (
    <div>
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>id</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Subtotal</th>
      <th>Eliminar</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
    
    </tr>
    <tr>
      <td>2</td>
      <td>adidas</td>
      <td>$2500</td>
      <td>$2500</td>
      <td><FaTrash/></td>
    </tr>
    <tr>
      <td>3</td>
      <td>adidas</td>
      <td>$5500</td>
      <td>$5500</td>
      <td><FaTrash/></td>
    </tr>
    <tr>
      <td>4</td>
      <td>adidas</td>
      <td>$1500</td>
      <td>$1500</td>
      <td><FaTrash/></td>
    </tr>
   
   
  </tbody>
</Table>
</div>
)
  
};

export default Cart;
