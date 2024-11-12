import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovieById } from "../../api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await searchMovieById(movieId);
        setMovie(data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return <div>{movie.title}</div>;
};

export default MovieDetailsPage;
