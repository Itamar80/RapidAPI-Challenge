import React, { ReactElement } from 'react';
import './ratings.scss';
import { NO_DATA_AVAILABLE } from '../../../../../consts/consts';
import { DetailedMovie } from '../../../../../types/Movie.types';
import RatingIcon from '../../../../../assets/rating.svg';

type RatingsSectionProps = {
  movie: DetailedMovie;
};
type DataProps = {
  data?: string;
};
export const RatingsSection: React.FC<RatingsSectionProps> = ({ movie }) => {
  const keys = ['imdbRating', 'imdbVotes', 'language'];
  const RenderData = (props: any) => {
    return <span>{props.data || NO_DATA_AVAILABLE}</span>;
  };
  const RenderKeys = () => {
    return (
      <div className='ratings-container'>
        {keys.map((key: string) => {
          return (
            <div>
              <span>{key}</span>
              <RenderData data={movie[key as keyof DetailedMovie]} />
              {movie[key as keyof DetailedMovie] && key === 'imdbRating' && <img src={RatingIcon} />}{' '}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className='ratings-section-container'>
      <RenderKeys />
    </div>
  );
};
