function Avatar() {
  return <div className="avatar">👤</div>;
}

function Rating({ stars = 5 }) {
  return <div className="rating">{"⭐".repeat(stars)}</div>;
}

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

const reviews = [
  {
    id: 1,
    name: "Sara A.",
    text: "Best brownies on campus. I ordered twice in one week!",
    stars: 5,
  },
  {
    id: 2,
    name: "Hira M.",
    text: "The nankhatai tasted just like my grandmother's.",
    stars: 5,
  },
  {
    id: 3,
    name: "Ayesha K.",
    text: "Cinnamon rolls were soft and fresh. Delivery was quick too.",
    stars: 4,
  },
];

function ReviewSection() {
  return (
    <section id="reviews">
      <h2>What students say</h2>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            text={review.text}
            stars={review.stars}
          />
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;