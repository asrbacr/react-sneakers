// Кастомные хуки - это как useState, только созданный сам.

import { useContext } from "react";
import AppContext from "../context";

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return { cartItems, setCartItems, totalPrice };
};
