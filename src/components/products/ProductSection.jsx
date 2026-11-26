
import { products } from "../../data/products";
import ProductCard from "./ProductCard";

function ProductSection() {
  return (
    <section id="shop">
      <h2>Fresh from the oven</h2>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            left={product.left}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
