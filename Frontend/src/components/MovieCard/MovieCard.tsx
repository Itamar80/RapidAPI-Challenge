import React from 'react';
import './movie-card.scss';
import { Movie } from '../../types/Movie.types';
import DefaultImage from '../../assets/default-poster.png';
type MovieCardProps = {
  movie: Movie;
  goToMovieDetails: (id: string) => void;
};

export const MovieCard: React.FC<MovieCardProps> = ({ movie, goToMovieDetails }) => {
  const customTitle = movie.title.length > 20 ? movie.title.substring(0, 18) : movie.title;
  const isPoster = movie.poster !== 'N/A';
  const Image = isPoster ? movie.poster : DefaultImage;
  return (
    <div className={'card-container'} onClick={() => goToMovieDetails(movie.id)}>
      <img alt='poster' src={Image} />
      <div className={'card-data'}>
        <div>
          {customTitle} ({movie.year})
        </div>
      </div>
    </div>
  );
};
