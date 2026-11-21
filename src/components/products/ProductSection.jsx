import BrownieCard from "./BrownieCard";
import NankhataiCard from "./NankhataiCard";
import RollCard from "./RollCard";

function ProductSection() {
  return (
    <section>
      <h2>Our Products</h2>

      <div className="products-grid">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  );
}

export default ProductSection;