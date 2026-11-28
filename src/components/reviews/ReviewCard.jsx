
function ReviewCard({ name, rating, comment }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <h3>{name}</h3>
        <p>{"★".repeat(rating)}</p>
      </div>

      <p>{comment}</p>
    </div>
  );
}

export default ReviewCard;
