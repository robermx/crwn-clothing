import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { signOutUser } from "../../utils/firebase/firebas.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContailner,
  LogoContainer,
  NavLinks,
  NavLink,
  LoggedUser,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useSelector(selectCurrentUser);
  console.log("currentUser", currentUser);
  const { displayName } = currentUser ?? "";
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContailner>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          {currentUser ? (
            <Fragment>
              <LoggedUser>
                Hello {displayName?.split(" ")[0]?.toString() ?? "Guest"}
              </LoggedUser>
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            </Fragment>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <NavLink to="/shop">SHOP</NavLink>
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContailner>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
