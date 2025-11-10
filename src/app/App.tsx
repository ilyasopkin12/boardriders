import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

