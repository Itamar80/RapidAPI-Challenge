import React from 'react';
import './movie-rest-data.scss';
import DefaultPoster from '../../../assets/default-poster.png';
// import { Genres } from '../Genres/Genres';
import { DetailedMovie, Rating } from '../../../../types/Movie.types';
import { MovieFieldArrayData } from './MovieFieldArrayData/MovieFieldArrayData';
// import { MovieHeader } from './MovieHeader/MovieHeader';

type MovieRestDataProps = {
  movie: DetailedMovie;
};
type DataListProps = {
  movie: DetailedMovie;
};

export const MovieRestData: React.FC<MovieRestDataProps> = ({ movie }) => {
  const DataList = (props: DataListProps) => {
    const { movie } = props;
    const movieKeysArr = Object.keys(movie);
    console.log('movieatt', movieKeysArr);
    return movieKeysArr.map((key) => {
      console.log('value', key);
      if (movie.ratings && Array.isArray(movie[key as keyof DetailedMovie])) {
        return <MovieFieldArrayData array={movie.ratings} />;
      } else {
        return (
          // make component and props drill it the data
          <p>
            <span>{key}</span>
            {/* <span>{movie[key as keyof DetailedMovie]}</span> */}
          </p>
        );
      }
    });
  };
  DataList({ movie });
  return <div className={'detailed-movie'}>{/* <DataList movie={movie} /> */}</div>;
};
