import React from 'react';
import './movies-list.scss';
import { Movie } from '../../types/Movie.types';
import { MovieCard } from '../MovieCard/MovieCard';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

interface MoviesListProps {
  movies: Movie[];
  isFetching: boolean;
}

export const MoviesList: React.FC<MoviesListProps> = (props) => {
  const navigate = useNavigate();
  const { movies, isFetching } = props;
  const goToMovieDetails = (id: string): void => {
    navigate('/' + id, { state: id });
  };

  return (
    <div className={'movies-list-container'}>
      {isFetching && <Loader />}
      {movies.map((movie: Movie) => {
        return <MovieCard movie={movie} goToMovieDetails={goToMovieDetails} key={movie.id} />;
      })}
    </div>
  );
};
