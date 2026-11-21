import Badge from "./Badge";

function NankhataiCard() {
  const name = "Nankhatai";
  const price = 300;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs {price}</p>
      <Badge />
    </div>
  );
}

export default NankhataiCard;