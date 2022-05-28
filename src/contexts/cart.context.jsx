import { createContext, useContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
});
export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
