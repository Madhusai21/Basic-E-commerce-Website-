import { createContext, useContext, useState } from "react";

const Cartcontext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((apple) => apple !== item));
  };

  return (
    <Cartcontext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </Cartcontext.Provider>
  );
};

export const useCart = () => {
  return useContext(Cartcontext);
};
