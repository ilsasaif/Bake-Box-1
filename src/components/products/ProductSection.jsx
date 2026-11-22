import BrownieCard from "./BrownieCard";
import NankhataiCard from "./NankhataiCard";
import RollCard from "./RollCard";

function ProductSection() {
  return (
    <section id="shop">
      <h2>Fresh from the oven</h2>

      <div className="products-grid">
        <BrownieCard />
        <NankhataiCard />
        <RollCard />
      </div>
    </section>
  );
}

export default ProductSection;