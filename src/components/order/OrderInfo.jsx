function OrderInfo() {
  const quantity = 5;
  const price = 450;
  const delivery = 100;
  const total = quantity * price + delivery;

  return (
    <section className="order-info" id="order">
      <h2>Your order</h2>

      <p>{quantity} x Chocolate Brownies at Rs {price}</p>
      <p>Delivery to your department: Rs {delivery}</p>

      <h3>Total: Rs {total}</h3>
    </section>
  );
}

export default OrderInfo;