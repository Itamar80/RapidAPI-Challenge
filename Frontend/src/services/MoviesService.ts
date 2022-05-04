import { Movie } from "../interfaces/Movie";
import axios from "axios";

const port = "6060";

export const getMoviesBySearchTerm = async (searchTerm: string) => {
  console.log("gettingMovies", searchTerm);
  const body = { searchTerm };
  const movies: Movie[] = await axios.post(
    "http://localhost:6060/movies",
    body
  );
  return movies;
};
