import { LandingPage } from './components/landingPage/LandingPage';
import  ComponetLogin  from './components/Login/ComponetLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<ComponetLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
