import { observable, makeObservable, action } from "mobx";
import { Movie } from "../interfaces/Movie";
import { getMoviesBySearchTerm } from "../services/MoviesService";

export class MoviesStoreImp {
  movies: Movie[] = [];

  constructor() {
    makeObservable(this, {
      movies: observable,
      getMovies: action,
    });
  }

  async getMovies(searchTerm: string) {
    const movies: Movie[] = await getMoviesBySearchTerm(searchTerm);
    console.log("movies from store", movies);
  }
}

export const MoviesStore = new MoviesStoreImp();
