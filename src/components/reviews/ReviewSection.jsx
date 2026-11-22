import ReviewSara from "./ReviewSara";
import ReviewHira from "./ReviewHira";

function ReviewSection() {
  return (
    <section id="reviews">
      <h2>What students say</h2>

      <div className="reviews-grid">
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  );
}

export default ReviewSection;