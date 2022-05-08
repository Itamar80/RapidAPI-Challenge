import React from 'react';
import './movie-rest-data.scss';
import { DetailedMovie, Rating } from '../../../../../types/Movie.types';

type MovieFieldArrayDataProps = {
  array: Rating[];
};

export const MovieFieldArrayData: React.FC<MovieFieldArrayDataProps> = ({ array }) => {
  return (
    <p>
      <span>ratings </span>
      {array.map((rate: Rating) => {
        return (
          <div key={rate.Source}>
            {rate.Source}, {rate.Value}
          </div>
        );
      })}
    </p>
  );
};
