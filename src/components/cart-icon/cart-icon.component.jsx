import { CartItemContainer, ItenCount, ShoppingIcon } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <CartItemContainer onClick={toggleCart}>
      <ItenCount>{cartCount} </ItenCount>
      <ShoppingIcon></ShoppingIcon>
    </CartItemContainer>
  );
};
export default CartIcon;
