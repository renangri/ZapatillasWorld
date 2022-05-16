import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./ItemCard.css";

const ItemCard = ({ item,initialCount,initialStock}) => {
  const [count, setCount] = useState(initialCount);
  const [stock, setStock] = useState(initialStock);

  function incrementCount() {
    if (count !== 10) {
      setCount((count) => count + 1);
    }
  }
  function discCount() {
    if (count !== 0) {
      setCount((count) => count - 1);
    }
  }

  function addToCart() {
    if (stock > 0 && stock !== 0) {
      setStock((stock) => stock - count);
    }

    if (stock < 0) {
      setStock((stock) => (stock = 0));
    }

    if (stock > 10) {
      setStock((stock) => (stock = 10));
    }
  }

  function renewStock() {
    setStock((stock) => (stock = 10));
  }

  const { name, price, image } = item;

  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={image} />
        <h5>{name}</h5>
        <p>{price}</p>
        <Card.Body>
          <Button variant="dark" className="buttons" onClick={discCount}>
            -
          </Button>
          <p className="text">{count}</p>
          <Button variant="dark" className="buttons" onClick={incrementCount}>
            +
          </Button>
          <div>
            <Button variant="dark" onClick={addToCart}>
              Agregar al carrito
            </Button>
          </div>

          <p className="text">el stock es : {stock}</p>

          <div>
            <Button variant="dark" onClick={renewStock}>
              Renovar stock
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCard;