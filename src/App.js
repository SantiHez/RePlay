import './App.css';
import ComponetLogin from './components/Login/ComponetLogin'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    
      <>

        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<ComponetLogin/>}></Route>
          </Routes>
        </BrowserRouter>
      </>

      
    </div>
  );
}

export default App;
