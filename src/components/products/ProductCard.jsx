function ProductCard({ name, price, inStock, left }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>

      <p>Rs {price}</p>

      {left === 0 && (
        <p className="sold-out">Sold Out</p>
      )}

      {left > 0 && left < 5 && (
        <p className="low-stock">Only {left} left</p>
      )}

      {inStock && (
        <button>Add to Box</button>
      )}

      {!inStock && (
        <button disabled>Unavailable</button>
      )}
    </div>
  );
}

export default ProductCard;