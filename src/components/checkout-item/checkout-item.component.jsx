import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ cartItem }) => {
  const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { id, name, quantity, imageUrl, price } = cartItem;
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };

  const removeItemHandler = () => {
    removeItemFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container" key={id}>
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-buton" onClick={clearItemHandler}>
        &#10005;
        {/* <span onClick={removeItemToCart(cartItem)}>decrement</span> */}
      </div>
    </div>
  );
};
export default CheckoutItem;
