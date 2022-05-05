import React, { MouseEventHandler, useEffect, useState } from "react";
import "./movie-card.scss";
import { Movie } from "../../interfaces/Movie";

interface MovieCardProps {
  movie: Movie;
  goToMovieDetails: (id: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  goToMovieDetails,
}) => {
  return (
    <div
      className={"card-container"}
      onClick={() => goToMovieDetails(movie.id)}
    >
      <img src={movie.poster} />
      <div>{movie.title}</div>
      <div>{movie.year}</div>
    </div>
  );
};
