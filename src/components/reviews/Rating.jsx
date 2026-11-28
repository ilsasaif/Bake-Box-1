import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewCard({ name, text, stars }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <Avatar />
        <h3>{name}</h3>
        <Rating stars={stars} />
      </div>

      <p>{text}</p>
    </div>
  );
}

export default ReviewCard;