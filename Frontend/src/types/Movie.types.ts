export type Movie = {
  id: string;
  title: string;
  year: string;
  poster: string;
};

export type SystemErrors = {
  NO_MOVIES_WITH_SEARCHTERM: string;
  GETTING_MOVIES_FAILER: string;
  NO_MOVIE_WITH_GIVEN_ID: string;
  GET_SPECIFIC_MOVIE_FAILED: string;
};

export type GetMovieResponse = {
  movie: DetailedMovie;
};

export type GetMoviesResponse = {
  movies: Movie[];
};

export type Rating = {
  Source: string;
  Value: string;
};
export type DetailedMovie = {
  actors?: string;
  awards?: string;
  country?: string;
  director?: string;
  genre?: string;
  language?: string;
  metascore?: string;
  plot?: string;
  poster?: string;
  production?: string;
  rated?: string;
  ratings?: Rating[];
  released?: string;
  runtime?: string;
  title?: string;
  website?: string;
  writer?: string;
  year?: string;
  imdbID?: string;
  imdbRating?: string;
  imdbVotes?: string;
};
