import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Footer,
  ProductCardContainer,
  Name,
  Price,
} from "./product-card.styles";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addCartItem = () => addItemToCart(product);
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`image of ${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addCartItem(product)}
      >
        Add to card
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
