import { useContext } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div>
      <h1>HI Checkout</h1>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>
          <div className="header-block">
            <span>Description</span>
          </div>
          <div className="header-block">
            <span>Quantity</span>
          </div>
          <div className="header-block">
            <span>Price</span>
          </div>
          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>;
        })}
        <span className="total">Total: ${cartTotal}</span>
      </div>
    </div>
  );
};

export default Checkout;
