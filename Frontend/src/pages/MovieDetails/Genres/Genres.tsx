import React from 'react';
import '../movie-details.scss';

type GenresProps = {
  movieGenres: string[];
};

export const Genres: React.FC<GenresProps> = ({ movieGenres }) => {
  return (
    <div className='genres-container'>
      {movieGenres.map((genre) => {
        return (
          <div className='genre' key={genre}>
            {genre}
          </div>
        );
      })}
    </div>
  );
};
