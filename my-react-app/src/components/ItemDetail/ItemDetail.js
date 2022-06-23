import React, { useState, useContext } from "react";
import { Card, Container,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaShoppingBag} from 'react-icons/fa';
import moment from "moment";


import ItemCount from "../ItemCount/ItemCount";

import { CartContext } from "../../Context/CartContext/CartContext";
import './itemDetail.css';

const ItemDetail = (item) => {
  let [items, setItems] = useContext(CartContext);
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/cart");
  };

  const addItem = (item, quantity) => {
    if (quantity === 0) {
      return;
    }

    let total = item.price * quantity;

    if (isInCart(item.id)) {
      const result = items.find((obj) => obj.item.id === item.id);

      result.quantity = result.quantity + quantity;

      items = removeItem(item.id);

      total = result.item.price * result.quantity;

      setItems([
        {
          item: result,
          quantity: result.quantity,
          date: moment().format("L"),
          total: total,
        },
        ...items,
      ]);
    } else {
      setItems([
        {
          item: item,
          quantity: quantity,
          date: moment().format("L"),
          total: total,
        },
        ...items,
      ]);
    }
  };

  const removeItem = (id) => {
    const result = items.filter((obj) => obj.item.id !== id);

    return result;
  };

  const isInCart = (id) => {
    return items.some((obj) => obj.item.id === id);
  };

  return (
    <div className="card">
    <div className="left">
      <img src={item.items.pictureUrl}
 alt="shoe"/>
    </div>
    <div className="right">
      <div className="product-info">
     
        <div className="details">
          
          <h3>Jordan</h3>
          <h2>{item.items.title}</h2>

          <h4><span className="fa fa-dollar"></span>${item.items.price}</h4>
  
        </div>
     
        <ul>
          <li>COLOR</li>
          <li className="yellow"></li>
          <li className="black"></li>
          <li className="blue"></li>
         
        </ul>

         
        <ItemCount
              count={count}
              setCount={setCount}
              stock={item.items.stock}
              initial={item.items.initial}
            ></ItemCount>
         {items.length > 0 ? 
         (
        <>
        <span className="foot" onClick={HandleClick} >Terminar Compra   <FaShoppingBag/> </span>
              </>  
        ) 
        : 
              (
              <></>
              ) }
        <span className="foot" onClick={() => addItem(item.items, count) } >Agregar<FaShoppingCart/></span>
        
      
      </div>
    </div>
     
  <div className="detailText">
  <Container>
    <h3 className="product">Detalles del producto:</h3>
    <p> {item.items.details} </p>
  </Container>
</div>
  </div>
    
  );
};

export default ItemDetail;
