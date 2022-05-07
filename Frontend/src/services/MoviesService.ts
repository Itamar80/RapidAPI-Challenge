import { GetMovieResponse, GetMoviesResponse } from '../types/Movie.types';
import axios, { AxiosResponse } from 'axios';
import { DOMAIN } from '../consts/secret';

export const getMoviesBySearchTerm = async (searchTerm: string): Promise<GetMoviesResponse> => {
  const result: AxiosResponse = await axios.get(`${DOMAIN}/movies?movieName=${searchTerm}`);
  return result.data;
};

export const getMovie = async (id: string): Promise<GetMovieResponse> => {
  const result: AxiosResponse = await axios.get(`${DOMAIN}/movie/${id}`);
  return result.data;
};
