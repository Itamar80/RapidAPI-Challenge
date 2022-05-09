import React, { useEffect, useState } from 'react';
import './search-page.scss';
import '../../styles/animations.scss';
import Form from '../../components/Form/Form';
import { MoviesStoreImp } from '../../store/MovieStore';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { observer } from 'mobx-react';
import { useSearchParams } from 'react-router-dom';
import { Movie } from '../../types/Movie.types';
type MovieListProps = {
  moviesStore: MoviesStoreImp;
};

const SearchPage: React.FC<MovieListProps> = ({ moviesStore }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [queryText, setQueryText] = useState<string>(searchParams.get('q') || '');

  const getMoviesBySearchTerm = (searchTerm: string): void => {
    setSearchParams({ q: searchTerm });
    setQueryText(searchTerm);
    moviesStore.getMovies(searchTerm);
  };

  useEffect(() => {
    if (moviesStore.movies.length) {
      setTimeout(() => {
        setMovies(moviesStore.movies);
      }, 1000);
    } else {
      setMovies([]);
    }
  }, [moviesStore.movies]);

  useEffect(() => {
    if (moviesStore.selectedMovie) {
      moviesStore.resetSelectedMovie();
    }
  }, [moviesStore]);

  return (
    <div className={'search-page-container'}>
      <Form getMoviesBySearchTerm={getMoviesBySearchTerm} moviesStore={moviesStore} inputValue={queryText} />
      <div className={`error`}>{moviesStore.errorMessage}</div>
      <MoviesList movies={movies} isFetching={moviesStore.isFetching} />
    </div>
  );
};

export default observer(SearchPage);
