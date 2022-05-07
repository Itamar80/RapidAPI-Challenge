import React from 'react';
import './movie-card.scss';
import { Movie } from '../../interfaces/Movie';

interface MovieCardProps {
  movie: Movie;
  goToMovieDetails: (id: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, goToMovieDetails }) => {
  const customTitle = movie.title.length > 20 ? movie.title.substring(0, 18) : movie.title;
  return (
    <div className={'card-container'} onClick={() => goToMovieDetails(movie.id)}>
      <img alt='poster' src={movie.poster} />
      <div className={'card-data'}>
        <div>
          {customTitle} ({movie.year})
        </div>
      </div>
    </div>
  );
};
