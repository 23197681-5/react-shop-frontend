import "./card-dropdown.styles.scss";
import Button from "../button/button.component";
const CardDropdown = () => {
  return (
    <div className="card-dropdown-container">
      <div className="card-items">
        <div className="card-dropdown__item__icon">
          <i className="fas fa-cog"></i>
        </div>
        <Button>GO TO CHECKOUT</Button>
        <div className="card-dropdown__item__text">
          <span>Settings</span>
        </div>
      </div>
      <div className="card-dropdown__item">
        <div className="card-dropdown__item__icon">
          <i className="fas fa-ellipsis-h"></i>
        </div>
        <div className="card-dropdown__item__text">
          <span>More</span>
        </div>
      </div>
    </div>
  );
};
export default CardDropdown;
