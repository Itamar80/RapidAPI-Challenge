import { DetailedMovie } from "../interfaces/Movie";
import { observable, makeObservable, action, runInAction } from "mobx";
import {
  GetMovieResponse,
  Movie,
  GetMoviesResponse,
} from "../interfaces/Movie";
import { getMoviesBySearchTerm, getMovie } from "../services/MoviesService";

export class MoviesStoreImp {
  movies: Movie[] = [];
  selectedMovie: DetailedMovie | null = null;
  isFetching: boolean = false;
  errorMessage: string = "";
  constructor() {
    makeObservable(this, {
      isFetching: observable,
      movies: observable,
      selectedMovie: observable,
      errorMessage: observable,
      getMovies: action,
    });
  }

  public async getMovies(searchTerm: string): Promise<void> {
    try {
      const data: GetMoviesResponse = await getMoviesBySearchTerm(searchTerm);
      if (data.movies.length) {
        runInAction(() => {
          this.movies = data.movies;
          this.resetErrorMessage();
        });
      }
    } catch (err) {
      this.errorMessage = "No movies with the word: " + searchTerm;
      this.resetMovies();
      console.log("Getting movies failed", err);
    }
  }

  public async getMovie(id: string): Promise<void> {
    try {
      if (this.isFetching) return;
      this.toggleIsFetching();
      const data: GetMovieResponse = await getMovie(id);
      runInAction(() => {
        data && this.toggleIsFetching();
        this.selectedMovie = data.movie;
        this.resetErrorMessage();
      });
    } catch (err) {
      console.log("Getting specific movie failed", err);
    }
  }

  private toggleIsFetching(): void {
    runInAction(() => {
      this.isFetching = !this.isFetching;
    });
  }

  private resetErrorMessage(): void {
    this.errorMessage = "";
  }

  private resetMovies(): void {
    this.movies = [];
  }
}

export const MoviesStore = new MoviesStoreImp();
