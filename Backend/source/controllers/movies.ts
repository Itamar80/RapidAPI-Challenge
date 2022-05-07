import axios, { AxiosResponse } from 'axios';
import { MOVIES_ENDPOINT, SUCCESS_MESSAGE } from '../consts/consts';
import { Request, Response } from 'express';
import { parseMovies, parseToDetailedMovie } from '../parsers/movies';

export const getMoviesBySearchTerm = async (req: Request, res: Response) => {
  const { movieName } = req.query;

  try {
    const result: AxiosResponse = await axios.get(`${MOVIES_ENDPOINT}&s=${movieName}`);
    const error = result?.data?.Error;
    const search = result?.data?.Search;

    if (error || !search) throw error;
    return res.status(200).json({
      movies: parseMovies(search),
      message: SUCCESS_MESSAGE,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Error in getting movies: ' + err,
    });
  }
};

export const getMovieById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result: AxiosResponse = await axios.get(`${MOVIES_ENDPOINT}&i=${id}`);
    const error = result?.data?.Error || (typeof result?.data === 'string' && result?.data.includes('Error'));

    if (error || !result) throw error;
    return res.status(200).json({
      movie: parseToDetailedMovie(result.data),
      message: SUCCESS_MESSAGE,
    });
  } catch (err) {
    res.status(500).json({
      message: err,
      movie: null,
    });
  }
};

export default { getMoviesBySearchTerm, getMovieById };
