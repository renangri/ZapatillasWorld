//Para insertar el icono del carrito instale fontawesome. Mas detalles: https://fontawesome.com/v5/docs/web/use-with/react
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //aca me importo la clase icono de font awesome.
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; //aca me traigo el icono que necesito.

const CartWidget = () => {
  return (
    <div>
        
      <a href="#">

        <FontAwesomeIcon className="cart" icon={faCartShopping} />

      </a>
    </div>
  );
};

export default CartWidget;

