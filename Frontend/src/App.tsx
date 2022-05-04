import './App.scss';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        {/* <Route path={"/movie/:id"}></Route> */}
        </Routes>
    </div>
    </Router>
  );
}

export default App;