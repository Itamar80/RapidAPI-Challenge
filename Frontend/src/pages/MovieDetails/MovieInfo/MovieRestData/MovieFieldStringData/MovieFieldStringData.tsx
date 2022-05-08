import React from 'react';
import './movie-rest-data.scss';
import { DetailedMovie, Rating } from '../../../../../types/Movie.types';

type MovieFieldDataProps = {
  key: string;
  value: string;
};

export const MovieFieldData: React.FC<MovieFieldDataProps> = ({ key, value }) => {
  return (
    <div className={'detailed-movie'}>
      {/* <DataList movie={movie} /> */}
      fielddata
    </div>
  );
};
