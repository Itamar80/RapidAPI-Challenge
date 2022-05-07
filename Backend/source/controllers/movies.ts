import axios, { AxiosResponse } from 'axios';
import { MOVIES_ENDPOINT } from '../consts/consts';
import { Request, Response, NextFunction } from 'express';
import { parseMovies, parseToDetailedMovie } from '../parsers/movies';

export const getMoviesBySearchTerm = async (req: Request, res: Response, next: NextFunction) => {
  const { q } = req.params;
  try {
    let result: AxiosResponse = await axios.get(`${MOVIES_ENDPOINT}&s=${q}`);
    let error = result.data.Error;
    let search = result.data.Search;

    if (error) {
      res.status(500).json({
        message: 'Error in getting movies: ' + result.data.Error,
      });
    } else {
      return res.status(200).json({
        movies: parseMovies(search),
        message: 'success',
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: 'Error in getting movies: ' + err,
    });
  }
};

export const getMovieById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    let result: AxiosResponse = await axios.get(`${MOVIES_ENDPOINT}&i=${id}`);
    let error = result.data.Error || (typeof result.data === 'string' && result.data.includes('Error'));

    if (error) {
      return res.status(500).json({
        movie: null,
        message: result.data.Error || result.data,
      });
    }

    return res.status(200).json({
      movie: parseToDetailedMovie(result.data),
      message: 'success',
    });
  } catch (err) {
    console.log('Error getting movie by id', err);
    return res.status(500).json({
      message: err,
    });
  }
};

export default { getMoviesBySearchTerm, getMovieById };
