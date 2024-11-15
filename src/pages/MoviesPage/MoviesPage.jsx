import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchMovieByName } from "../../api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieTitle = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!movieTitle) return;

    const fetchMovies = async () => {
      try {
        const data = await searchMovieByName(movieTitle);
        setMovies(data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchMovies();
  }, [movieTitle]);

  const handleSearch = (query) => {
    const nextParams = query !== "" ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchBox value={movieTitle} onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
