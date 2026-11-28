
function calculateTotal(quantity, price, delivery) {
  return quantity * price + delivery;
}

function OrderInfo({ itemName, quantity, price, delivery }) {
  const total = calculateTotal(quantity, price, delivery);

  return (
    <section className="order-info" id="order">
      <h2>Your Order</h2>

      <p>
        {quantity} x {itemName} at Rs {price}
      </p>

      <p>Delivery to your department: Rs {delivery}</p>

      <h3>Total: Rs {total}</h3>

      <button className="place-order">
        Place Order
      </button>

    </section>
  );
}

export default OrderInfo;
