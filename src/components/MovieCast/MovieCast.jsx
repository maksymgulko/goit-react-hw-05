import { getMovieCast } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        const data = await getMovieCast(movieId);
        setCredits(data);
      } catch (e) {
        console.error(e);
      }
    }
    getCast();
  }, [movieId]);

  if (!credits) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {credits.map((cast) => (
        <li key={cast.id}>{cast.name}</li>
      ))}
    </ul>
  );
};

export default MovieCast;
