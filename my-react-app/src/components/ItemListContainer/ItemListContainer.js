import { Container } from "react-bootstrap";
import React, { useState } from "react";

import ItemList from "../ItemList/ItemList";
import productServices from "../../mock/productMock";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// grilla de productos, por el momento tengo 4 para este demo
const ItemListContainer = ({ saludo }) => {
  // intenté con varios modos y sólo useState me permite guardar mis productos posterior al render
  const [arrayItems, setarrayItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  productServices().then((res) => {
    setarrayItems(res);
    setIsLoading(false);
  });

  return (
    <div>
      <h3>{saludo}</h3>
      <br />
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <Container>
          <div className="itemContainer">
            <ItemList items={arrayItems}></ItemList>
          </div>
        </Container>
      )}
    </div>
  );
};

export default ItemListContainer;
