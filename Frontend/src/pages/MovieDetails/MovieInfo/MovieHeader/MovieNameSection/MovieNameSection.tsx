import React from 'react';
import './movie-name-section.scss';
import { DetailedMovie } from '../../../../../types/Movie.types';

type MovieNameSectionProps = {
  movie: DetailedMovie;
};

export const MovieNameSection: React.FC<MovieNameSectionProps> = ({ movie }) => {
  return (
    <div className='movie-name-section'>
      <div className='movie-name'>{movie.title}</div>

      <div className='movie-top-data'>
        <span>{movie.year}</span>
        <span>{movie.rated}</span>
        <span>{movie.runtime}</span>
      </div>
    </div>
  );
};
