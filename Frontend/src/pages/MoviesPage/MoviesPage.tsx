import React, { useEffect, useState } from "react";
import "./movies.scss";
import { Form } from "../../components/Form/Form";
import { MoviesStoreImp } from "../../store/MovieStore";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { observer } from "mobx-react";
interface MovieListProps {
  moviesStore: MoviesStoreImp;
}

const MoviesPage: React.FC<MovieListProps> = ({ moviesStore }) => {
  const getMoviesBySearchTerm = (searchTerm: string): void => {
    moviesStore.getMovies(searchTerm);
  };
  console.log("moviesStore.movies", moviesStore.movies);

  return (
    <div className={"movies-list-container"}>
      <Form
        getMoviesBySearchTerm={getMoviesBySearchTerm}
        moviesStore={moviesStore}
      />
      <p>{moviesStore.errorMessage}</p>
      <MoviesList movies={moviesStore.movies} />
    </div>
  );
};

export default observer(MoviesPage);
