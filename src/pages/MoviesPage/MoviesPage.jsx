import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { searchMovieByName } from "../../api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieTitle = searchParams.get("query") ?? "";

  const handleSearch = async (query) => {
    try {
      const data = await searchMovieByName(query);
      setMovies(data);
      const nextParams = query !== "" ? { query } : {};
      setSearchParams(nextParams);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <SearchBox value={movieTitle} onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
