import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewSara() {
  return (
    <div className="review-card">
      <div className="review-header">
        <Avatar />
        <h3>Sara A.</h3>
        <Rating />
      </div>

      <p>Best brownies on campus. I ordered twice in one week!</p>
    </div>
  );
}

export default ReviewSara;