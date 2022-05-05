export interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}

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
