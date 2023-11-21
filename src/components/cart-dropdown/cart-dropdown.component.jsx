import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import ButtonComponent from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckouthandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckouthandler}>
        GO TO CHECKOUT
      </ButtonComponent>
    </div>
  );
};

export default CartDropdown;
