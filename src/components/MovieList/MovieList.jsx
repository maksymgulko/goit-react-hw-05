import { Link } from "react-router-dom";

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => {
            onMovieClick(movie.id);
          }}
        >
          <Link to={`${movie.id}`}>
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
