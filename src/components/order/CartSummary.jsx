
import { cart } from "../../data/cart";

function CartSummary() {
  let subtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    subtotal = subtotal + cart[i].price * cart[i].qty;
  }

  const delivery = subtotal >= 3000 ? 0 : 100;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <section className="cart-summary" id="cart">
        <h2>Your box</h2>
        <p>Your box is empty. Add something yummy!</p>
      </section>
    );
  }

  return (
    <section className="cart-summary" id="cart">
      <h2>Your box</h2>

      {cart.map((item) => (
        <div className="cart-row" key={item.id}>
          <span>{item.name} × {item.qty}</span>
          <span>Rs {item.price * item.qty}</span>
        </div>
      ))}

      <div className="cart-row">
        <span>Subtotal</span>
        <span>Rs {subtotal}</span>
      </div>

      <div className="cart-row">
        <span>Delivery</span>
        <span>{delivery === 0 ? "Free" : `Rs ${delivery}`}</span>
      </div>

      <div className="cart-row cart-total">
        <strong>Total</strong>
        <strong>Rs {total}</strong>
      </div>
    </section>
  );
}

export default CartSummary;
