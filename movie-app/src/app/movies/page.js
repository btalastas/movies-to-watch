import { getMovies } from "../../../lib/getMovies";

const Movies = () => {
  const movies = getMovies();
  return (
    <div>
      <h1>Browse Movies Here</h1>
      <p>We currently have {movies.length} movies to browse.</p>
    </div>
  );
};

export default Movies;
