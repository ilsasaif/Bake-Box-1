
import { reviews } from "../../data/reviews";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  let total = 0;

  for (let i = 0; i < reviews.length; i++) {
    total = total + reviews[i].rating;
  }

  const average = reviews.length > 0
    ? (total / reviews.length).toFixed(1)
    : 0;

  return (
    <section id="reviews">
      <h2>What students say</h2>

      {reviews.length > 0 && (
        <p>Average rating: {average}</p>
      )}

      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first!</p>
      ) : (
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              rating={review.rating}
              comment={review.comment}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ReviewSection;
