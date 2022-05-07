import { GetMovieResponse, GetMoviesResponse } from './../interfaces/Movie';
import axios, { AxiosResponse } from 'axios';
import { DOMAIN } from '../constants/secret';

export const getMoviesBySearchTerm = async (searchTerm: string): Promise<GetMoviesResponse> => {
  const result: AxiosResponse = await axios.get(`${DOMAIN}/movies/${searchTerm}`);
  return result.data;
};

export const getMovie = async (id: string): Promise<GetMovieResponse> => {
  const result: AxiosResponse = await axios.get(`${DOMAIN}/movie/${id}`);
  return result.data;
};
