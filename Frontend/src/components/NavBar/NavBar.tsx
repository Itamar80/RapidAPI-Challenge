import React from 'react';
import './nav-bar.scss';
import BackIcon from '../../assets/arrow.png';
import RapidApiLogo from '../../assets/rapidAPI.svg';
import { useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className={'nav-bar'}>
      <button className={'go-back-button'} onClick={() => navigate(-1)}>
        <img alt='back' src={BackIcon} />
        <span>Go back</span>
      </button>
      <img alt='rapidapi-icon' className='rapidapi-logo' src={RapidApiLogo} onClick={() => navigate(-1)} />
    </nav>
  );
};
