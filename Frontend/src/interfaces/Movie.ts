export interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}

export type SystemErrors = {
  NO_MOVIES_WITH_SEARCHTERM: string;
  GETTING_MOVIES_FAILER: string;
  NO_MOVIE_WITH_GIVEN_ID: string;
  GET_SPECIFIC_MOVIE_FAILED: string;
};

export interface GetMoviesResponse {
  movies: Movie[];
}

interface Rating {
  Source: string;
  Value: string;
}
export interface DetailedMovie {
  actors: string;
  awards: string;
  country: string;
  director: string;
  genre: string;
  language: string;
  metascore: string;
  plot: string;
  poster: string;
  production: string;
  rated: string;
  ratings: Rating[];
  released: string;
  runtime: string;
  title: string;
  website: string;
  writer: string;
  year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface GetMovieResponse {
  movie: DetailedMovie;
}
