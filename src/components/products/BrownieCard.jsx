import Badge from "./Badge";

function BrownieCard() {
  const name = "Chocolate Brownie";
  const price = 450;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs {price}</p>
      <Badge />
    </div>
  );
}

export default BrownieCard;