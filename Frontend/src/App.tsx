import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { MoviesStore } from "./store/MovieStore";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={"/"} element={<MoviesPage moviesStore={MoviesStore} />} />
        <Route
          path={"/:id"}
          element={<MovieDetails moviesStore={MoviesStore} />}
        />
      </Routes>
    </div>
  );
}

export default App;
