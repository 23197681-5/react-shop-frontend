import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as ShopLogo } from "../../assets/loja.svg";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  };
  return (
    <div>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>
        <nav className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          )}
          <div className="logo-container">
            <CardIcon />
          </div>
        </nav>
      </nav>
      <div className="container">
        <div className="infoi">
          <Outlet />
        </div>

        {cartIsOpen && (
          <div className="navi">
            <CardDropdown />
          </div>
        )}
      </div>
    </div>
  );
};
export default Navigation;
