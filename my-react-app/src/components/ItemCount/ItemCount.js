import React from "react";
import { Button } from "react-bootstrap";

const ItemCount = (props) => {
  const onAdd = () => {
    // comprobación de stock
    if (props.count < props.stock) {
      props.setCount(props.count + 1);
    }
  };

  const onSubtraction = () => {
    // comprobación para que el inicial no sea menor a 1
    if (props.count > props.initial) {
      props.setCount(props.count - 1);
    }
  };

  return (
    <div className="itemcount-container">
      <Button variant="danger" onClick={onSubtraction}>
        -
      </Button>
      <span> {props.count} </span>
      <Button variant="success" onClick={onAdd}>
        +
      </Button>
      <br />
    </div>
  );
};

export default ItemCount;
