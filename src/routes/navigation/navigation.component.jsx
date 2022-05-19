import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { useContext } from "react";
import { UserContext, setCurrentUser } from "../../contexts/user.context";
import { ReactComponent as ShopLogo } from "../../assets/loja.svg";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
        <a href="/shop">
          <nav className="nav-links-container">
            <Link className="nav-link" to="shop">
              SHOP
            </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>
                SING OUT
              </span>
            ) : (
              <Link className="nav-link" to="auth">
                Sign-In
              </Link>
            )}
          </nav>
        </a>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navigation;
