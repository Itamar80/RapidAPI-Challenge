import React from 'react';
import './move-field-string-data.scss';
import { DetailedMovie, Rating } from '../../../../../types/Movie.types';
import { transformFirstLetterToCapital } from '../../../../../helpers/utils';

type MovieFieldStringDataProps = {
  value?: any;
  movieKey: string;
};

export const MovieFieldStringData: React.FC<MovieFieldStringDataProps> = ({ value, movieKey }) => {
  console.log('movieKey', movieKey);

  return (
    <div className={'detailed-movie'}>
      <p>
        <span>{transformFirstLetterToCapital(movieKey)}:</span>
        <span>{value}</span>
      </p>
    </div>
  );
};
