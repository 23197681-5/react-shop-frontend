import { Outlet, Link } from "react-router-dom";
import {
  NavigationContainer,
  NavLinksContainer,
  LogoContainer,
  NavLink,
} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as ShopLogo } from "../../assets/loja.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const { cartIsOpen, setCartIsOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    const res = await signOutUser();
    setCurrentUser(null);
  };
  return (
    <div>
      <NavigationContainer>
        <LogoContainer to="/">
          <ShopLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}
          <LogoContainer as="div">
            <CartIcon />
          </LogoContainer>
        </NavLinksContainer>
      </NavigationContainer>
      <div className="container">
        <div className="infoi">
          <Outlet />
        </div>

        {cartIsOpen && (
          <div className="navi">
            <CartDropdown />
          </div>
        )}
      </div>
    </div>
  );
};
export default Navigation;
