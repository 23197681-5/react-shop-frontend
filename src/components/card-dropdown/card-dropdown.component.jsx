import "./card-dropdown.styles.scss";
import Button from "../button/button.component";
const CardDropdown = (cartItems?) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems?.length ? (
          cartItems?.map((cartItem) => <div></div>)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <div className="button">
        <Button onClick={() => {}}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};
export default CardDropdown;