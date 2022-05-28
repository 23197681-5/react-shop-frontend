import "./cart-item.styles.scss";
const CartItem = ({ cartItem }) => {
  const { quantity, name, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {price}$x{quantity}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
