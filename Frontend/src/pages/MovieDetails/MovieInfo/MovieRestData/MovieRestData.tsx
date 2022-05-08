import React from 'react';
import './movie-rest-data.scss';
import { DetailedMovie } from '../../../../types/Movie.types';
import { MovieFieldArrayData } from './MovieFieldArrayData/MovieFieldArrayData';
import { MovieFieldStringData } from './MovieFieldStringData/MovieFieldStringData';
import { parseMovieObject } from '../../../../helpers/utils';
type MovieRestDataProps = {
  movie: DetailedMovie;
};

export const MovieRestData: React.FC<MovieRestDataProps> = ({ movie }) => {
  const parsedMovie = parseMovieObject(movie);
  const movieKeysArr = Object.keys(parsedMovie);
  return (
    <div className={'detailed-movie'}>
      {movieKeysArr.map((key) => {
        if (movie.ratings && Array.isArray(movie[key as keyof DetailedMovie])) {
          return <MovieFieldArrayData array={movie.ratings} key={key} />;
        }
        return <MovieFieldStringData value={movie[key as keyof DetailedMovie]} key={key} movieKey={key} />;
      })}
    </div>
  );
};
