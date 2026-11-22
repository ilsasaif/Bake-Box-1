import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewSara() {
  return (
    <div className="review-card">
      <Avatar />
      <h3>Sara</h3>
      <Rating />
      <p>The brownies were delicious and fresh!</p>
    </div>
  );
}

export default ReviewSara;