import { products } from "./data/products.js";

const discount = 0;

function Broken() {
  return (
    <div>
      <h2>Menu</h2>

      {discount > 0 && <p>Discount: {discount}%</p>}

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}: Rs {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Broken;