import React, { useEffect } from "react";
import "./search-page.scss";
import { Form } from "../../components/Form/Form";
import { MoviesStoreImp } from "../../store/MovieStore";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { observer } from "mobx-react";
import { useSearchParams, useLocation } from "react-router-dom";

interface MovieListProps {
  moviesStore: MoviesStoreImp;
}

const SearchPage: React.FC<MovieListProps> = ({ moviesStore }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getMoviesBySearchTerm = (searchTerm: string): void => {
    moviesStore.getMovies(searchTerm);
    setSearchParams({ q: searchTerm });
  };
  const getInput = (str: string) => {
    return str.substring(str.indexOf("=") + 1);
  };
  const queryText = getInput(useLocation().search);

  return (
    <div className={"movies-list-container"}>
      <Form
        getMoviesBySearchTerm={getMoviesBySearchTerm}
        moviesStore={moviesStore}
        inputValue={queryText}
      />
      <p>{moviesStore.errorMessage}</p>
      <MoviesList movies={moviesStore.movies} />
    </div>
  );
};

export default observer(SearchPage);
