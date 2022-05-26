import React, { useState, useContext } from "react";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";

import { CartContext } from "../../Context/CartContext/CartContext";

const ItemDetail = (item) => {
  let [items, setItems] = useContext(CartContext);
  const [count, setCount] = useState(0);

  const addItem = (item, quantity) => {
    if (quantity === 0) {
      return;
    }

    if (isInCart(item.id)) {
      const result = items.find((obj) => obj.item.id === item.id);

      result.quantity = result.quantity + quantity;

      items = removeItem(item.id);

      items.push({ item: result, quantity: result.quantity });
    } else {
      items.push({ item: item, quantity: quantity });
    }
  };

  const removeItem = (id) => {
    const result = items.filter((obj) => obj.item.id !== id);

    return result;
  };

  const clear = () => {
    setItems([]);
  };

  const isInCart = (id) => {
    return items.some((obj) => obj.item.id === id);
  };

  console.log(items);
  return (
    <div className="itemDetail">
      <div className="theItems">
        <Card bg="secondary" text="light" style={{ width: "18rem" }}>
          <Card.Text>
            <br />
            <span>{item.items.title}</span>
            <br />
            <span>
              <span>${item.items.price}</span>
            </span>
          </Card.Text>

          <Card.Img
            variant="top"
            src={item.items.pictureUrl}
            alt="foto de producto"
          />

          <Card.Body>
            <span>{item.items.description}</span> <br /> <br />
            {/* aquí llamo el componente ItemCount */}
            <ItemCount
              count={count}
              setCount={setCount}
              stock={item.items.stock}
              initial={item.items.initial}
            ></ItemCount>
            <button type="button" onClick={() => addItem(item.items, count)}>
              Agregar a mi carrito
            </button>
            <Link to={"cart"}>
              <button type="button" onClick={() => clear()}>
                Terminar mi compra
              </button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="detailText">
        <Container>
          <h3>Detalles del producto:</h3>
          <p> {item.items.details} </p>
        </Container>
      </div>
    </div>
  );
};

export default ItemDetail;
