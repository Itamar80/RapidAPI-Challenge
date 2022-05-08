import { ERROR_GETTING_MOVIE, ERROR_GETTING_MOVIES } from '../consts/consts';
import { isKeyValid, checkIsValidInput } from '../helpers/helper';
import { Movie, ParsedMovie, ParsedDetailedMovie, DetailedMovie } from '../types/movie.types';

export const parseMovies = (movies: Movie[]): ParsedMovie[] => {
  if (!movies.length) throw ERROR_GETTING_MOVIES;
  return movies.map((movie: Movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      id: movie.imdbID,
    };
  });
};

export const parseToDetailedMovie = (movie: any): ParsedDetailedMovie => {
  if (!Object.keys(movie).length) throw ERROR_GETTING_MOVIE;
  let parsedMovie: ParsedDetailedMovie = {};
  Object.keys(movie).map((key) => {
    if (isKeyValid(key) && checkIsValidInput(movie[key as keyof DetailedMovie])) {
      const lowerCaseKey = (key.charAt(0).toLowerCase() + key.substring(1, key.length)) as keyof ParsedDetailedMovie;
      parsedMovie[lowerCaseKey] = movie[key as keyof DetailedMovie];
    }
  });
  return parsedMovie;
};
