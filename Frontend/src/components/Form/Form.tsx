import React, { useEffect, useState } from "react";
import { MoviesStoreImp } from "../../store/MovieStore";
import "./Form.scss";

interface FormProps {
  getMoviesBySearchTerm: (searchTerm: string) => void;
  moviesStore: MoviesStoreImp;
}

export const Form: React.FC<FormProps> = ({
  getMoviesBySearchTerm,
  moviesStore,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const isButtonDisabled = searchTerm === "" && !moviesStore.isFetching;
  return (
    <div className={"form-container"}>
      <input
        type={"text"}
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <button
        disabled={isButtonDisabled}
        onClick={() => getMoviesBySearchTerm(searchTerm)}
      >
        submit
      </button>
    </div>
  );
};
