import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./movie-details.scss";
import { MoviesStoreImp } from "../../store/MovieStore";
import { observer } from "mobx-react";
import { Loader } from "../../components/Loader/Loader";

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
      <div className={"go-back-button"} onClick={() => navigate(-1)}>
        back
      </div>
      {isFetching && <Loader />}
      <div className={"movie-detailed-card"}>
        <div>{selectedMovie && selectedMovie.title}</div>
      </div>
    </div>
  );
};

export default observer(MovieDetails);
