import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import { MoviesStore } from './store/MovieStore';
import MovieDetails from './pages/MovieDetails/MovieDetails';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={'/'} element={<SearchPage moviesStore={MoviesStore} />} />
        <Route path={'/:id'} element={<MovieDetails moviesStore={MoviesStore} />} />
      </Routes>
    </div>
  );
}

export default App;
