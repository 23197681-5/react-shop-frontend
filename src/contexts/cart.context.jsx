import { createContext, useReducer, dispatch, useState } from "react";

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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    if (existingCartItem.quantity > 1) {
      return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    } else {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }
  }
  return [...cartItems, { ...cartItemToRemove, quantity: 1 }];
};
const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
  cartIsOpen: false,
  setCartIsOpen: () => {},
  cartItems: [],
  addCartItem: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

const INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  // const payload = {
  //   cartItems,
  //   cartCount,
  //   cartTotal
  // }
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    case "SET_CART_IS_OPEN":
      state.cartIsOpen = payload.cartIsOpen;
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled action type: ${type} in cartReducer`);
  }
};
export const CartProvider = ({ children }) => {
  const [{ cartItems, cartIsOpen, cartTotal, cartCount }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (newCartItem) => {
    const newCartCount = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItem.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    dispatch({
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItem,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (cartItemToremove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToremove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (cartItemToremove) => {
    const newCartItems = clearCartItem(cartItems, cartItemToremove);
    updateCartItemsReducer(newCartItems);
  };
  const setCartIsOpen = () => {
    dispatch({
      type: "SET_CART_IS_OPEN",
      payload: {
        cartIsOpen: !cartIsOpen,
      },
    });
  };

  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
