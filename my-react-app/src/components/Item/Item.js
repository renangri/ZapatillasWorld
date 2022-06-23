import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './item.css';


const Item = (item) => {
  return (
    <div className="container">
      
      <Link to={`/detail/${item.id}`}>
        <div className="card">
            <div className="imgBx">
                <img src={item.pictureUrl}
/>
            </div>

            <div className="contentBx">

                <h2>{item.title}</h2>

                

                <div className="color">

                    <h3>Color :</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <Link to={`/detail/${item.id}`}>

               

                <a href="#">Detalles</a>
                </Link>

            </div>

        </div>
        </Link>
    </div>
  );
};

export default Item;
