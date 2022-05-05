import React from "react";
import "./movies-list.scss";
import { Movie } from "../../interfaces/Movie";
import { toJS } from "mobx";
import { MovieCard } from "../MovieCard/MovieCard";
import { useNavigate } from "react-router-dom";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList: React.FC<MoviesListProps> = (props) => {
  const navigate = useNavigate();
  const { movies } = props;
  const goToMovieDetails = (id: string): void => {
    navigate("/" + id, { state: id });
  };

  return (
    <div className={"movies-list-container"}>
      {toJS(movies).map((movie: Movie) => {
        return (
          <MovieCard
            movie={movie}
            goToMovieDetails={goToMovieDetails}
            key={movie.id}
          />
        );
      })}
    </div>
  );
};
