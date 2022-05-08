import React from 'react';
import './movie-info.scss';
import DefaultPoster from '../../../assets/default-poster.png';
import { Genres } from '../Genres/Genres';
import { DetailedMovie, Rating } from '../../../types/Movie.types';
import { MovieHeader } from './MovieHeader/MovieHeader';
import { MovieRestData } from './MovieRestData/MovieRestData';

type MovieInfoProps = {
  movie: DetailedMovie;
};

export const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
  const movieGenres: string[] = (movie?.genre && movie?.genre.split(',')) || [];
  const movieInfoList = (movie: any): any => {
    return Object.keys(movie).map((key) => {
      console.log('value', key);
      if (Array.isArray(movie[key])) {
        return (
          <p>
            <span>ratings </span>
            {movie.ratings.map((rate: Rating) => {
              return (
                <div key={rate.Source}>
                  {rate.Source}, {rate.Value}
                </div>
              );
            })}
          </p>
        );
      }
      return (
        <p>
          <span>{key}</span>
          {movie[key]}
        </p>
      );
    });
  };
  return (
    <div className={'detailed-movie'}>
      <MovieHeader movie={movie} />
      <div className='poster-section'>
        <img alt='poster' src={movie.poster || DefaultPoster} />
        <div className='data-container'>
          <Genres movieGenres={movieGenres} />
          <MovieRestData movie={movie} />
        </div>
      </div>
    </div>
  );
};
