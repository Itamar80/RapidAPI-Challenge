import React, { MouseEventHandler, useEffect, useState } from "react";
import "./movie-card.scss";
import { Movie } from "../../interfaces/Movie";

interface MovieCardProps {
  movie: Movie;
  goToMovieDetails: (id: string) => undefined;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  goToMovieDetails,
}) => {
  return (
    <div
      className={"movies-list-container"}
      onClick={() => goToMovieDetails(movie.id)}
    >
      <div>{movie.title}</div>
    </div>
  );
};
