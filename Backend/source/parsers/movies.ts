import { Movie, ParsedMovie, ParsedDetailedMovie, DetailedMovie } from '../interfaces/movie.interfaces';

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

export const parseToDetailedMovie = (movie: DetailedMovie): ParsedDetailedMovie => {
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
