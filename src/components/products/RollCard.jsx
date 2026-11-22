import Badge from "./Badge";

function RollCard() {
  const name = "Cinnamon Rolls";
  const price = 500;

  return (
    <div className="product-card">
      <Badge />
      <h3>{name}</h3>
      <p>Box of 4, with cream cheese</p>
      <p>Rs {price}</p>
    </div>
  );
}

export default RollCard;