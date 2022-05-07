import React, { useEffect, useState } from 'react';
import { MoviesStoreImp } from '../../store/MovieStore';
import './Form.scss';
import '../../styles/animations.scss';
import SearchIcon from '../../assets/search.svg';
import RapodAPILogo from '../../assets/rapidAPI.svg';
interface FormProps {
  getMoviesBySearchTerm: (searchTerm: string) => void;
  moviesStore: MoviesStoreImp;
  inputValue: string;
}

export const Form: React.FC<FormProps> = ({ getMoviesBySearchTerm, moviesStore, inputValue }) => {
  const [searchTerm, setSearchTerm] = useState<string>(inputValue || '');
  const isButtonDisabled = searchTerm === '' && !moviesStore.isFetching;
  const disabledClass = isButtonDisabled ? 'disabled' : '';
  const isMoviesInStore = !!moviesStore.movies.length;
  const formAnimtaionClass = isMoviesInStore ? 'form-move-up' : '';
  const logoAnimtaionClass = isMoviesInStore ? 'item-visibility' : '';

  return (
    <div className={`form-container ${formAnimtaionClass}`}>
      <img className={`rapidapi-logo ${logoAnimtaionClass}`} src={RapodAPILogo} />
      <input type={'text'} placeholder={'Search'} onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm} />
      <button className={`search-button ${disabledClass}`} disabled={isButtonDisabled} onClick={() => getMoviesBySearchTerm(searchTerm)}>
        <img src={SearchIcon} />
      </button>
    </div>
  );
};
