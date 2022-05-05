import { GetMovieResponse } from "./../interfaces/Movie";
import { Movie, MoviesResponse } from "../interfaces/Movie";
import axios, { Axios, AxiosResponse } from "axios";

const port = "6060";

export const getMoviesBySearchTerm = async (
  searchTerm: string
): Promise<MoviesResponse> => {
  const body = { searchTerm };
  const result: AxiosResponse = await axios.post(
    "http://localhost:6060/movies",
    body
  );
  return result.data;
};

export const getMovie = async (id: string): Promise<GetMovieResponse> => {
  const body = { id };
  const result: AxiosResponse = await axios.post(
    `http://localhost:6060/movies/${id}`,
    body
  );
  return result.data;
};
