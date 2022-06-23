import React, { createContext, useState } from "react";

export const CartContext = createContext();

const initialState = [];
const initialTotal = 0;

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);
  const [total, setTotal] = useState(initialTotal);

  return (
    <CartContext.Provider value={[items, setItems, total, setTotal]}>
      {children}
    </CartContext.Provider>
  );
};
