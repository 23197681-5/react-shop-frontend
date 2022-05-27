import "./card-icon.styles.scss";
import { ReactComponent as ShoppingBag } from "../../assets/shopping-bag.svg";

const CardIcon = () => {
  return (
    <div className="card-icon-container">
      <ShoppingBag className="shopping-icon"></ShoppingBag>
      <span className="card-icon-container item-count">10 </span>
    </div>
  );
};
export default CardIcon;
