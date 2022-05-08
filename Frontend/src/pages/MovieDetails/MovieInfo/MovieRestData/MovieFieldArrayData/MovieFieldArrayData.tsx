import React from 'react';
import './move-field-array-data.scss';
import { Rating } from '../../../../../types/Movie.types';
import { transformFirstLetterToCapital } from '../../../../../helpers/utils';

type MovieFieldArrayDataProps = {
  array: Rating[];
};

export const MovieFieldArrayData: React.FC<MovieFieldArrayDataProps> = ({ array }) => {
  return (
    <p>
      <span>Ratings </span>
      {array.map((rate: Rating) => {
        return (
          <div key={rate.Source}>
            {transformFirstLetterToCapital(rate.Source)}, {rate.Value}
          </div>
        );
      })}
    </p>
  );
};
