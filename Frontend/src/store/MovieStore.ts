import { DetailedMovie } from '../types/Movie.types';
import { observable, makeObservable, action, runInAction } from 'mobx';
import { GetMovieResponse, Movie, GetMoviesResponse } from '../types/Movie.types';
import { getMoviesBySearchTerm, getMovie } from '../services/MoviesService';
import { Errors } from '../consts/consts';

export class MoviesStoreImp {
  movies: Movie[] = [];
  selectedMovie: DetailedMovie | null = null;
  isFetching: boolean = false;
  errorMessage: string = '';
  constructor() {
    makeObservable(this, {
      isFetching: observable,
      movies: observable,
      selectedMovie: observable,
      errorMessage: observable,
      setIsFetching: action,
      resetSelectedMovie: action,
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
    } finally {
      this.setIsFetching(false);
    }
  }

  public async getMovie(id: string): Promise<void> {
    try {
      if (this.isFetching) return;
      this.setIsFetching(true);
      const data: GetMovieResponse = await getMovie(id);
      const isMovieFound = !!data.movie;

      runInAction(() => {
        isMovieFound && this.setIsFetching(false);
        this.selectedMovie = data.movie;
        this.resetErrorMessage();
      });
    } catch (err) {
      this.resetSelectedMovie();
      this.setIsFetching(false);
      this.changeErrorMessage(Errors.NO_MOVIE_WITH_GIVEN_ID + id);
    } finally {
      this.setIsFetching(false);
    }
  }

  resetSelectedMovie() {
    this.selectedMovie = null;
  }

  setIsFetching(isFetching: boolean): void {
    this.isFetching = isFetching;
  }

  private resetErrorMessage(): void {
    this.errorMessage = '';
  }

  private changeErrorMessage(str: string) {
    this.errorMessage = str;
  }

  private resetMovies(): void {
    this.movies = [];
  }
}

export const MoviesStore = new MoviesStoreImp();
