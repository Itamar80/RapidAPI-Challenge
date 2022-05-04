import React, { useEffect, useState } from "react";
import "./Form.scss";

interface FormProps {
  //   searchValue: string;
  getMoviesBySearchTerm: (searchTerm: string) => void;
}

export const Form: React.FC<FormProps> = ({ getMoviesBySearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className={"form-container"}>
      <input
        type={"text"}
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <button onClick={() => getMoviesBySearchTerm(searchTerm)}>submit</button>
    </div>
  );
};
