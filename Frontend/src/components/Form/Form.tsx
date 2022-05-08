import React, { useState } from 'react';
import { MoviesStoreImp } from '../../store/MovieStore';
import './Form.scss';
import '../../styles/animations.scss';
import SearchIcon from '../../assets/search.svg';
import RapodAPILogo from '../../assets/rapidAPI.svg';
import { DISABLED, FORM_MOVE_DOWN, FORM_MOVE_UP, ITEM_HIDDEN, ITEM_VISIBLE } from '../../consts/consts';
type FormProps = {
  getMoviesBySearchTerm: (searchTerm: string) => void;
  moviesStore: MoviesStoreImp;
  inputValue: string;
};

const Form: React.FC<FormProps> = ({ getMoviesBySearchTerm, moviesStore, inputValue }) => {
  const [searchTerm, setSearchTerm] = useState<string>(inputValue || '');
  const isButtonDisabled = searchTerm === '' && !moviesStore.isFetching;
  const disabledClass: string = isButtonDisabled ? DISABLED : '';
  const isMoviesInStore: boolean = !!moviesStore.movies.length;
  const formAnimtaionClass: string = isMoviesInStore ? FORM_MOVE_UP : FORM_MOVE_DOWN;
  const logoAnimtaionClass: string = isMoviesInStore ? ITEM_VISIBLE : ITEM_HIDDEN;

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

export default Form;
