import ReviewSara from "./ReviewSara";
import ReviewHira from "./ReviewHira";

function ReviewSection() {
  return (
    <section>
      <h2>Customer Reviews</h2>

      <div>
        <ReviewSara />
        <ReviewHira />
      </div>
    </section>
  );
}

export default ReviewSection;