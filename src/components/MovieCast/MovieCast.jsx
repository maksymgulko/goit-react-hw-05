import { getMovieCast } from "../../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./Moviecast.module.css";

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
        <li key={cast.id}>
          <ul>
            <li>
              <img
                src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                alt={`${cast.name}`}
                className={css.pfpic}
              />
            </li>
            <li>{cast.name}</li>
            <li>
              {"Character: "} {cast.character}
            </li>
          </ul>
          <br />
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
