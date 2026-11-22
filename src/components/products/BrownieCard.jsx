import Badge from "./Badge";

function BrownieCard() {
  const name = "Chocolate Brownies";
  const price = 450;

  return (
    <div className="product-card">
      <Badge />
      <h3>{name}</h3>
      <p>Box of 6, fudgy and warm</p>
      <p>Rs {price}</p>
    </div>
  );
}

export default BrownieCard;