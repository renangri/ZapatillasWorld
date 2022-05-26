import React from "react";
import { useEffect, useState } from "react";
import { products } from "../mock/products.js";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const data = new Promise((resolve, reject) => {
        if (products) {
          resolve(products);
        }

        reject("Error aqui");
      });

      data.then((data) => {
        setItems(data);
      });

      data.catch((err) => {
        console.log(err);
      });

      data.finally(() => {
        setloading(false);
      });
    }, 1000);
  }, []);

  return <>{loading ? <h1>Cargando...</h1> : <ItemList items={items} />}</>;
};

export default ItemListContainer;
