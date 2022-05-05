import { observable, makeObservable, action, toJS } from "mobx";
import { GetMovieResponse, Movie, MoviesResponse } from "../interfaces/Movie";
import { getMoviesBySearchTerm, getMovie } from "../services/MoviesService";

export class MoviesStoreImp {
  movies: Movie[] = [];
  selectedMovie: Movie | null = null;
  isFetching: boolean = false;
  errorMessage: string = "";
  constructor() {
    makeObservable(this, {
      isFetching: observable,
      movies: observable,
      selectedMovie: observable,
      errorMessage: observable,
      getMovies: action,
      getSpecificMovie: action,
    });
  }

  async getMovies(searchTerm: string): Promise<void> {
    try {
      const data: MoviesResponse = await getMoviesBySearchTerm(searchTerm);
      if (data.movies.length) this.movies = data.movies;
      this.resetErrorMessage();
    } catch (err) {
      this.errorMessage = "No movies with the word: " + searchTerm;
      console.log("searchterm", this.errorMessage);
      this.movies = [];
      console.log("Getting movies failed", err);
    }
  }

  async getMovie(id: string): Promise<void> {
    console.log("isFetching", this.isFetching);
    try {
      if (this.isFetching) {
        console.log("Currently fetching");
        return;
      }
      const movie =
        this.movies.find((movie) => id === movie.id) ||
        (await this.getSpecificMovie(id));
      this.selectedMovie = movie;
      this.resetErrorMessage();
    } catch (err) {
      console.log("Getting specific movie failed", err);
    }
  }

  async getSpecificMovie(id: string): Promise<Movie | null> {
    this.toggleIsFetching();
    try {
      const data: GetMovieResponse = await getMovie(id);
      data && this.toggleIsFetching();
      this.resetErrorMessage();
      return data.movie;
    } catch (err) {
      console.log("Get movie by id failed", err);
      this.selectedMovie = null;
      this.errorMessage = "Get specific movie failed";
      return null;
    }
  }

  toggleIsFetching() {
    this.isFetching = !this.isFetching;
  }

  resetErrorMessage() {
    this.errorMessage = "";
  }
}

export const MoviesStore = new MoviesStoreImp();
