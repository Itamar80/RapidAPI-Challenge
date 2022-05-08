import React from 'react';
import './movie-header.scss';
import { DetailedMovie } from '../../../../types/Movie.types';
import { MovieNameSection } from './MovieNameSection/MovieNameSection';
import { RatingsSection } from './RatingsSection/RatingsSection';

type MovieHeaderProps = {
  movie: DetailedMovie;
};

export const MovieHeader: React.FC<MovieHeaderProps> = ({ movie }) => {
  return (
    <div className={'movie-header-section'}>
      <MovieNameSection movie={movie} />
      <RatingsSection movie={movie} />
    </div>
  );
};
