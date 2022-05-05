interface Rating {
  Source: string;
  Value: string;
}
export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface convetedMovie {
  title: string;
  year: string;
  poster: string;
  id: string;
}
export interface ConvertedDetailedMovie {
  title: string;
  year: string;
  poster: string;
  id: string;
  actors: string;
  awards: string;
  country: string;
  director: string;
  genre: string;
  language: string;
  metaScore: string;
  plot: string;
  production: string;
  rated: string;
  ratings: Rating[];
  released: string;
  runtime: string;
  website: string;
  writer: string;
  imdbRating: string;
  imdbVotes: string;
}
export interface DetailedMovie {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: Rating[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}
