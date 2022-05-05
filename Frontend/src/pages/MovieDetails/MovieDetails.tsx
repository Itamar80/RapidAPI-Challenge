import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./movie-details.scss";
import { MoviesStoreImp } from "../../store/MovieStore";
import { observer } from "mobx-react";
import { Loader } from "../../components/Loader/Loader";
import BackIcon from "../../assets/arrow.png";
interface MovieDetailsProps {
  moviesStore: MoviesStoreImp;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ moviesStore }) => {
  const { id } = useParams();
  const { state } = useLocation();
  const { isFetching, selectedMovie } = moviesStore;
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof state === "string" && state) {
      moviesStore.getMovie(state);
    } else if (typeof id === "string" && id) {
      moviesStore.getMovie(id);
    }
  }, [id]);

  return (
    <div className={"movie-details-container"}>
      <img
        className={"go-back-button"}
        src={BackIcon}
        onClick={() => navigate(-1)}
      />
      {isFetching || !selectedMovie ? (
        <Loader />
      ) : (
        <div className={"movie-detailed-card"}>
          <img src={selectedMovie.poster} />
          {/* <div>
            {Object.keys(selectedMovie).map((key) => {
              return (
                <div>
                  {key}:{selectedMovie[key as keyof DetailedMovie]}
                </div>
              );
            })}
          </div> */}
          <div>title :{selectedMovie.title}</div>
          <div>year: {selectedMovie.year}</div>
          <div>actors: {selectedMovie.actors}</div>
          <div>awards: {selectedMovie.awards}</div>
          <div>{selectedMovie.country}</div>
          <div>{selectedMovie.director}</div>
          <div>{selectedMovie.genre}</div>
          <div>{selectedMovie.imdbRating}</div>
          <div>{selectedMovie.imdbVotes}</div>
          <div>{selectedMovie.language}</div>
          <div>{selectedMovie.metascore}</div>
          <div>{selectedMovie.plot}</div>
          <div>{selectedMovie.production}</div>
          <div>{selectedMovie.rated}</div>
          <div>
            {selectedMovie.ratings.map((rate) => {
              return (
                <div key={rate.Source}>
                  {rate.Source}, {rate.Value}
                </div>
              );
            })}
          </div>
          <div>{selectedMovie.released}</div>
          <div>{selectedMovie.runtime}</div>
          <div>{selectedMovie.website}</div>
          <div>{selectedMovie.writer}</div>
        </div>
      )}
    </div>
  );
};

export default observer(MovieDetails);
