import { GetMovieResponse, GetMoviesResponse } from "./../interfaces/Movie";
import axios, { Axios, AxiosResponse } from "axios";
import { DOMAIN } from "../constants/secret";

export const getMoviesBySearchTerm = async (
  searchTerm: string
): Promise<GetMoviesResponse> => {
  const body = { searchTerm };
  const result: AxiosResponse = await axios.post(DOMAIN, body);
  return result.data;
};

export const getMovie = async (id: string): Promise<GetMovieResponse> => {
  const body = { id };
  const result: AxiosResponse = await axios.post(`${DOMAIN}${id}`, body);
  return result.data;
};
