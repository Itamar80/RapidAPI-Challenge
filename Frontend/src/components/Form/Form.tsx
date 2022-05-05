import React, { useEffect, useState } from "react";
import { MoviesStoreImp } from "../../store/MovieStore";
import "./Form.scss";

interface FormProps {
  getMoviesBySearchTerm: (searchTerm: string) => void;
  moviesStore: MoviesStoreImp;
  inputValue: string;
}

export const Form: React.FC<FormProps> = ({
  getMoviesBySearchTerm,
  moviesStore,
  inputValue,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>(inputValue || "");
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
