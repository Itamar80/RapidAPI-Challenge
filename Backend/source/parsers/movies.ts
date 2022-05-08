import { NO_DATA_AVAILABLE } from '../consts/consts';
import { isKeyValid, checkIsValidInput } from '../helpers/helper';
import { Movie, ParsedMovie, ParsedDetailedMovie, DetailedMovie } from '../types/movie.types';

export const parseMovies = (movies: Movie[]): ParsedMovie[] => {
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
  let parsedMovie: ParsedDetailedMovie = {};
  Object.keys(movie).map((key) => {
    if (isKeyValid(key) && checkIsValidInput(movie[key as keyof DetailedMovie])) {
      let lowerCaseKey = key.charAt(0).toLowerCase() + key.substring(1, key.length);
      parsedMovie[lowerCaseKey as keyof ParsedDetailedMovie] = movie[key as keyof DetailedMovie];
    }
  });
  return parsedMovie;
};
