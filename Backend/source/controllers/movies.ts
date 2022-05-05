import { API_KEY } from "../consts/consts";
import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import {
  Movie,
  convetedMovie,
  ConvertedDetailedMovie,
  DetailedMovie,
} from "../interfaces/movie.interfaces";

const convertMovies = (movies: Movie[]): convetedMovie[] => {
  return movies.map((movie: Movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      id: movie.imdbID,
    };
  });
};

const convertToDetailedMovie = (
  movie: DetailedMovie
): ConvertedDetailedMovie => {
  return {
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    id: movie.imdbID,
    actors: movie.Actors,
    awards: movie.Awards,
    country: movie.Country,
    director: movie.Director,
    genre: movie.Genre,
    language: movie.Language,
    metaScore: movie.Metascore,
    plot: movie.Plot,
    production: movie.Production,
    rated: movie.Rated,
    ratings: movie.Ratings,
    released: movie.Released,
    runtime: movie.Runtime,
    website: movie.Website,
    writer: movie.Writer,
    imdbRating: movie.imdbRating,
    imdbVotes: movie.imdbVotes,
  };
};

const getMoviesBySearchTerm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.body;

  try {
    let result: AxiosResponse = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
    );
    console.log("result", result.data.Search);
    let movies: convetedMovie[] = [];
    if (result?.data) {
      movies = convertMovies(result.data.Search);
    }
    return res.status(200).json({
      movies,
    });
  } catch (err) {
    console.log("Error in getting movies", err);
    return res.status(500).json({
      message: err,
    });
  }
};

const getMovieById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  try {
    let result: AxiosResponse = await axios.get(
      `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
    );
    console.log("result,data", result.data);

    let movie: convetedMovie;
    if (result.data) {
      movie = convertToDetailedMovie(result.data);
      return res.status(200).json({
        movie,
      });
    }
  } catch (err) {
    console.log("Error getting movie by id", err);
    return res.status(500).json({
      message: err,
    });
  }
};

export default { getMoviesBySearchTerm, getMovieById };
