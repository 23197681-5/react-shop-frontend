import "./card-icon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CardIcon = () => {
  const { cartIsOpen, setCartIsOpen, cartCount } = useContext(CartContext);
  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <div className="card-icon-container" onClick={toggleCart}>
      <ShoppingBag className="shopping-icon"></ShoppingBag>
      <span className="card-icon-container item-count">{cartCount} </span>
    </div>
  );
};
export default CardIcon;
