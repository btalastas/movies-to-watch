/**
 * Iterates through json file and adds each movie to a list.
 * @returns list of movies.
 */
export const getMovies = () => {
  const json_data = require("../../../movies.json");
  let movies = [];
  json_data.map((movie) => {
    movies.push(movie);
  });

  return movies;
};
