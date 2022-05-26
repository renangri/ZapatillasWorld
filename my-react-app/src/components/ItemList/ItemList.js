import Item from "../Item/Item";
import React from "react";

const ItemList = ({ items }) => {
  return items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      pictureUrl={item.pictureUrl}
      price={item.price}
      stock={item.stock}
      initial={item.initial}
    ></Item>
  ));
};

export default ItemList;
