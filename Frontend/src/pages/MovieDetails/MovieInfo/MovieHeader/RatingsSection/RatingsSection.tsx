import React from 'react';
import './ratings.scss';
import { DetailedMovie } from '../../../../../types/Movie.types';
import { RatingData } from './RatingData/RatingData';

type RatingsSectionProps = {
  movie: DetailedMovie;
};

export const RatingsSection: React.FC<RatingsSectionProps> = ({ movie }) => {
  const keys = ['imdbRating', 'imdbVotes', 'language'];
  return (
    <div className='ratings-section-container'>
      <div className='ratings-container'>
        {keys.map((key: string) => {
          const isIconVisible = !!movie[key as keyof DetailedMovie] && key === 'imdbRating';
          return (
            <div>
              <span>{key}</span>
              <RatingData data={movie[key as keyof DetailedMovie]?.toString()} isIconVisible={isIconVisible} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
