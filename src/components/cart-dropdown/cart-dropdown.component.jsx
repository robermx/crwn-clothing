import ButtonComponent from "../button/button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <ButtonComponent />
    </div>
  );
};

export default CartDropdown;