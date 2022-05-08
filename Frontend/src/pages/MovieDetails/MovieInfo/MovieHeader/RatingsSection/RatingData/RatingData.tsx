import React from 'react';
import '../ratings.scss';
import { NO_DATA_AVAILABLE } from '../../../../../../consts/consts';
import RatingIcon from '../../../../../../assets/rating.svg';

type RatingDataProps = { data?: string; isIconVisible: boolean };
export const RatingData: React.FC<RatingDataProps> = ({ data, isIconVisible }) => {
  return (
    <div className='header-rating-data'>
      <span>{data || NO_DATA_AVAILABLE}</span>
      {isIconVisible && <img alt='rating-icon' src={RatingIcon} />}
    </div>
  );
};
