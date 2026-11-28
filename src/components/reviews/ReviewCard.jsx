import Avatar from "./Avatar";
import Rating from "./Rating";

function ReviewHira() {
  return (
    <div className="review-card">
      <div className="review-header">
        <Avatar />
        <h3>Hira M.</h3>
        <Rating />
      </div>

      <p>The nankhatai tasted just like my grandmother's.</p>
    </div>
  );
}

export default ReviewHira;