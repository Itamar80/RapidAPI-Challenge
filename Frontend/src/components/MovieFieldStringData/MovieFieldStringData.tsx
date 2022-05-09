import React from 'react';
import './move-field-string-data.scss';
import { transformFirstLetterToCapital } from '../../helpers/utils';

type MovieFieldStringDataProps = {
  value: string | undefined;
  movieKey: string;
};

export const MovieFieldStringData: React.FC<MovieFieldStringDataProps> = ({ value, movieKey }) => {
  return (
    <div className='movie-field-string-data-container'>
      <span>{transformFirstLetterToCapital(movieKey)}: </span>
      <p>{value}</p>
    </div>
  );
};
