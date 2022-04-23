import { Outlet } from "react-router-dom";
import { Fragment, Link } from "react";
import "./navigation.styles.scss";
import { ReactComponent as ShopLogo } from "../../assets/loja.svg";
const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        {/* <Link className="logo-container" to="/"> */}
        <ShopLogo className="logo" />
        {/* </Link> */}
        <div className="nav-links-container">
          {/* <Link className="nav-link" to="/shop"> */}
          SHOP
          {/* </Link> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigation;
