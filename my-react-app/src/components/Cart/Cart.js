import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { FaTrash, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  let [items, setItems] = useContext(CartContext);

  const removeItem = (id) => {
    const result = items.filter((obj) => obj.item.id !== id);
    console.log(result);

    if (result.length === 0) {
      setItems([]);
    } else {
      setItems([...result]);
    }
  };

  return (
    <div>
      {items.length === 0 ? (
        <>
          <h1 className="mt-3">No hay items</h1>
          <Link className="text-decoration-none" to="/">
            <FaRegArrowAltCircleLeft className="h1" /> Volver
          </Link>
        </>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {items.map((row) => (
              <tr key={row.item.id}>
                <td>{row.item.id}</td>
                <td> {row.item.title}</td>
                <td> {row.item.price}</td>
                <td> {row.quantity}</td>
                <td>
                  <FaTrash
                    onClick={() => {
                      removeItem(row.item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Cart;
