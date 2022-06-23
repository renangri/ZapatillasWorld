import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import {
  FaTrash,
  FaRegArrowAltCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";
import { CartContext } from "../../Context/CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  let [items, setItems, total, setTotal] = useContext(CartContext);
  let totalAux = 0;

  const removeItem = (id) => {
    const result = items.filter((obj) => obj.item.id !== id);

    if (result.length === 0) {
      setItems([]);
    } else {
      setItems([...result]);
    }
  };

  const getTotal = () => {
    items.map((ord) => {
      totalAux += ord.total;
      return totalAux;
    });
    setTotal(totalAux);
  };
  getTotal();

  return (
    <>
      {items.length === 0 ? (
        <>
          <h1 className="mt-3">No hay items</h1>
          <Link className="text-decoration-none col-md-2 offset-md-10" to="/">
            <FaRegArrowAltCircleLeft className="h1" /> Volver
          </Link>
        </>
      ) : (
        <>
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
              {items.map((row,index) => (
                <tr key={index}>
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
          <div className="col-md-2 offset-md-10">
            <div className="border border-4 border-dark mb-3">
              <h5>Total: {total}</h5>
            </div>
          </div>

          <div className="col-md-2 offset-md-10 mt-5 ">
            <Link className="text-decoration-none" to="/shipping">
              <FaArrowCircleRight className="h1" />
              <h5>Ir a informacion del envio</h5>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
