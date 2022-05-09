import { DetailedMovie } from '../types/Movie.types';

const keysToDelete = ['poster', 'imdbID', 'imdbRating', 'imdbVotes', 'title', 'runtime', 'year', 'language', 'rated', 'genre'];

export const isValueValid = (value: string): boolean => value !== '';

export const parseMovieObject = (movie: DetailedMovie): DetailedMovie => {
  keysToDelete.forEach((key: string) => {
    delete movie[key as keyof DetailedMovie];
  });
  return movie;
};

export const transformFirstLetterToCapital = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
