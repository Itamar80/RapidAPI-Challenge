import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesPage } from "./pages/MoviesPage/MoviesPage";
import { MoviesStore } from "./store/MovieStore";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path={"/"}
            element={<MoviesPage moviesStore={MoviesStore} />}
          />
          {/* <Route path={"/movie/:id"}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
