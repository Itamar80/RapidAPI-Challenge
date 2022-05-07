import React, { useEffect, useState } from 'react';
import './search-page.scss';
import '../../styles/animations.scss';
import Form from '../../components/Form/Form';
import { MoviesStoreImp } from '../../store/MovieStore';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { observer } from 'mobx-react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getValueFromParams } from '../../helpers/utils';
import { Movie } from '../../interfaces/Movie';
interface MovieListProps {
  moviesStore: MoviesStoreImp;
}

const SearchPage: React.FC<MovieListProps> = ({ moviesStore }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const getMoviesBySearchTerm = (searchTerm: string): void => {
    setSearchParams({ q: searchTerm });
    moviesStore.getMovies(searchTerm);
  };

  const queryText: string = getValueFromParams(search, '=');

  useEffect(() => {
    if (moviesStore.movies.length) {
      setTimeout(() => {
        setMovies(moviesStore.movies);
      }, 1000);
    } else {
      setMovies([]);
    }
  }, [moviesStore.movies]);

  return (
    <div className={'search-page-container'}>
      <Form getMoviesBySearchTerm={getMoviesBySearchTerm} moviesStore={moviesStore} inputValue={queryText} />
      <div className={`error`}>{moviesStore.errorMessage}</div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default observer(SearchPage);
