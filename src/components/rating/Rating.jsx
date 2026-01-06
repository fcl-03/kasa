import "./Rating.scss";

function Rating({ rating }) {
  const value = Number(rating); // "3" -> 3

  return (
    <div className="rating" aria-label={`Note: ${value} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`rating__star ${star <= value ? "is-active" : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
