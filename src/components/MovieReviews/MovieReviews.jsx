import { getMovieReviews } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const data = await getMovieReviews(movieId);

        setReviews(data);
      } catch (e) {
        console.error(e);
      }
    }
    getReviews();
  }, [movieId]);

  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reviews.length === 0 ? (
        <p>No reviews.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.author}</strong>: {review.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
