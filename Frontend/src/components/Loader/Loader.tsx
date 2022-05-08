import React from 'react';
import './loader.scss';
import LoaderIcon from '../../assets/loader.svg';
type LoaderProps = {};

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <div className={'loader-container'}>
      <img alt='loader' src={LoaderIcon} />
    </div>
  );
};
