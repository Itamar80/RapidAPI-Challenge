import React, { useEffect, useState } from 'react';
import './loader.scss';
import LoaderIcon from '../../assets/loader.svg';
interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = (props) => {
  return (
    <div className={'loader-container'}>
      <img src={LoaderIcon} />
    </div>
  );
};
