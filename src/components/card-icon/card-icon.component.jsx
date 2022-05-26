import "./card-icon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  return (
    <div className="card-icon-container">
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};
export default CardIcon;
