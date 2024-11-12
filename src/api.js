import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZTc4NjU4NjQxNjA3Yjg0Nzg5MjIwZmZjZGM4ZjllMiIsIm5iZiI6MTczMTQyOTczNC45Mjc5NDgyLCJzdWIiOiI2NzMzODQxNWJlZmQ0OWMwYmI2NTg4ZWQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.qR4hy8FD1iGzfsGAgNpZ3RryB5HN71qLA_05r7TS1Rw",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org";

export const searchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      "/3/trending/movie/day?language=en-US",
      options
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const searchMovieById = async (movieId) => {
  try {
    const response = await axios.get(
      `/3/movie/${movieId}?language=en-US`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
