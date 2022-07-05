import "./card-dropdown.styles.scss";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems?.length ? (
          cartItems?.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="button">
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};
export default CardDropdown;
