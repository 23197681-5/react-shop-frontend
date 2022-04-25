import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as ShopLogo } from "../../assets/loja.svg";
const Navigation = () => {
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
          </nav>
        </a>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navigation;
