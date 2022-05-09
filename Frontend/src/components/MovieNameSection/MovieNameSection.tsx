import React from 'react';
import './movie-name-section.scss';
import { DetailedMovie } from '../../types/Movie.types';

type MovieNameSectionProps = {
  movie: DetailedMovie;
};

export const MovieNameSection: React.FC<MovieNameSectionProps> = ({ movie }) => {
  const fields: string[] = ['year', 'rated', 'runtime'];
  return (
    <div className='movie-name-section'>
      <div className='movie-name'>{movie.title}</div>

      <div className='movie-data'>
        {fields.map((field: string) => {
          const isField = !!movie[field as keyof DetailedMovie];
          return isField && <span key={field}>{movie[field as keyof DetailedMovie] as keyof DetailedMovie}</span>;
        })}
      </div>
    </div>
  );
};
