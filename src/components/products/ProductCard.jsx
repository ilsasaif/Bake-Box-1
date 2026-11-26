
function ProductCard({ name, price, inStock, left }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Rs {price}</p>
      <p>{inStock ? "In Stock" : "Sold Out"}</p>
      <p>Left: {left}</p>
    </div>
  );
}

export default ProductCard;
