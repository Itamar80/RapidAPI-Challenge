import React, { useEffect, useState } from "react";
import "./MoviesPage.scss";
import { Form } from "../../components/Form/Form";
import { MoviesStoreImp } from "../../store/MovieStore";

interface MovieListProps {
  moviesStore: MoviesStoreImp;
}

export const MoviesPage: React.FC<MovieListProps> = ({ moviesStore }) => {
  const getMoviesBySearchTerm = (searchTerm: string): void => {
    moviesStore.getMovies(searchTerm);
  };
  return (
    <div className={"movies-list-container"}>
      <Form getMoviesBySearchTerm={getMoviesBySearchTerm} />
      {/* <MoviesList/> */}
    </div>
  );
};
