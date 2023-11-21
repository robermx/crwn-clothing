import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.conponent";

const blockTitles = [
  { id: 1, title: "Product" },
  { id: 2, title: "Description" },
  { id: 3, title: "Quantity" },
  { id: 4, title: "Price" },
  { id: 5, title: "remove" },
];

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {blockTitles.map(({ id, title }) => (
          <div key={id} className="checkout-block  ">
            <span>{title}</span>
          </div>
        ))}
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
