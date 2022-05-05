export interface Movie {
  id: string;
  title: string;
  year: string;
  poster: string;
}

export interface MoviesResponse {
  movies: Movie[];
}
export interface GetMovieResponse {
  movie: Movie;
}
