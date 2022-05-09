import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './movie-details.scss';
import { MoviesStoreImp } from '../../store/MovieStore';
import { observer } from 'mobx-react';
import { Loader } from '../../components/Loader/Loader';
import { isValueValid } from '../../helpers/utils';
import { NavBar } from './NavBar/NavBar';
import { MovieInfo } from './MovieInfo/MovieInfo';
type MovieDetailsProps = {
  moviesStore: MoviesStoreImp;
};

const MovieDetails: React.FC<MovieDetailsProps> = ({ moviesStore }) => {
  const { id = '' } = useParams();
  const { selectedMovie, errorMessage } = moviesStore;

  useEffect(() => {
    isValueValid(id) && moviesStore.getMovie(id);
  }, [id, moviesStore]);

  return (
    <div className={'movie-details-container'}>
      <NavBar />
      <div className={`error`}>{errorMessage}</div>
      {selectedMovie ? <MovieInfo movie={selectedMovie} /> : <Loader />}
    </div>
  );
};

export default observer(MovieDetails);
