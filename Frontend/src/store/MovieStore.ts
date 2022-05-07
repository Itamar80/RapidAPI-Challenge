import { DetailedMovie } from "../interfaces/Movie";
import { observable, makeObservable, action, runInAction } from "mobx";
import {
  GetMovieResponse,
  Movie,
  GetMoviesResponse,
} from "../interfaces/Movie";
import { getMoviesBySearchTerm, getMovie } from "../services/MoviesService";
import { Errors } from "../constants/constants";

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
      this.changeErrorMessage(Errors.NO_MOVIES_WITH_SEARCHTERM + searchTerm);
      this.resetMovies();
      console.log(Errors.GETTING_MOVIES_FAILER, err);
    }
  }

  public async getMovie(id: string): Promise<void> {
    try {
      if (this.isFetching) return;
      this.toggleIsFetching();
      const data: GetMovieResponse = await getMovie(id);
      const isMovieFound = !!data.movie;

      runInAction(() => {
        isMovieFound && this.toggleIsFetching();
        this.selectedMovie = data.movie;
        this.resetErrorMessage();

        if (data.movie === null) {
          this.changeErrorMessage(Errors.NO_MOVIE_WITH_GIVEN_ID + id);
        }
      });
    } catch (err) {
      this.changeErrorMessage(Errors.NO_MOVIE_WITH_GIVEN_ID + id);
      console.log(Errors.GET_SPECIFIC_MOVIE_FAILED, err);
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

  private changeErrorMessage(str: string) {
    this.errorMessage = str;
  }

  private resetMovies(): void {
    this.movies = [];
  }
}

export const MoviesStore = new MoviesStoreImp();
