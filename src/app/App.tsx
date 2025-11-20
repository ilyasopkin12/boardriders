import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import { Header, Footer } from "../widgets";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
