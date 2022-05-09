import React from 'react';
import './loader.scss';
import LoaderIcon from '../../assets/loader.svg';

export const Loader: React.FC = () => {
  return (
    <div className={'loader-container'}>
      <img alt='loader' src={LoaderIcon} />
    </div>
  );
};
