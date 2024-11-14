import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovieById } from "../../api";
import { HiArrowLeft } from "react-icons/hi";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state ?? "/movies";

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

  return (
    <div>
      <Link to={backLinkHref} className={css.link}>
        <HiArrowLeft size="24" />
      </Link>
      <div className={css.container}>
        <br />
        <img
          className={css.pfpic}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.name}`}
        />
        <div className={css.minfo}>
          <h1>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </h1>
          {"User score: " + Math.round(movie.vote_average * 10) + "%"}
          <h2>Overview</h2>
          {movie.overview}
          <h2>Genres</h2>
          <ul className={css.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.ainfo}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={backLinkHref}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={backLinkHref}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
