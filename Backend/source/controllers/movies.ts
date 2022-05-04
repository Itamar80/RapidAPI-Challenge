import { API_KEY } from "../consts/consts";
import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
interface convetedMovie {
  title: string;
  year: string;
  poster: string;
}

const convertMovies = (movies: Movie[]): convetedMovie[] => {
  return movies.map((movie: Movie) => {
    return { title: movie.Title, year: movie.Year, poster: movie.Poster };
  });
};

const getMoviesBySearchTerm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { searchTerm } = req.body;
  let result: AxiosResponse = await axios.get(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
  );
  console.log("result", result.data.Search);

  let movies: convetedMovie[] = convertMovies(result.data.Search);
  return res.status(200).json({
    movies,
  });
};

export default { getMoviesBySearchTerm };
