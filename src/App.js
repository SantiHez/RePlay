import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
          <Link to="/">Inicio</Link>
          <Link to="/series">Series</Link>
          <Link to="/peliculas">Peliculas</Link>
          </nav>
        </div>
      </Router>
      
      <div>
        <h1>ejemplo</h1>
      </div>
    </>
  );
}

export default App;
