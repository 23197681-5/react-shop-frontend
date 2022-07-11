import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Price,
} from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { quantity, name, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl}></Image>
      <div className="item-details">
        <Name>{name}</Name>
        <div>
          {price}$x{quantity}
        </div>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
