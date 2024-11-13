import { searchTrendingMovies } from "../../api";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  // const navigate = useNavigate()
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await searchTrendingMovies();
        setTrendingMovies(data);
      } catch (e) {
        console.error(e);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <div>
      <MovieList movies={trendingMovies} />
    </div>
  );
};
export default HomePage;
