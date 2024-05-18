import logo from './logo.svg';
import './App.css';
import './components/menu/ComponentMenu.css'
import ComponentMenu from'./components/menu/ComponentMenu'

import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ComponentMenu/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
