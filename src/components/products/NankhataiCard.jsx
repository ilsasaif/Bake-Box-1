function NankhataiCard() {
  const name = "Nankhatai Box";
  const price = 350;

  return (
    <div className="product-card">
      <span className="badge new">New</span>
      <h3>{name}</h3>
      <p>Box of 12, cardamom flavour</p>
      <p>Rs {price}</p>
    </div>
  );
}

export default NankhataiCard;