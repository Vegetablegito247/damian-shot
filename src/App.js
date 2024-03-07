import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./pages/galleryPage";
import AboutMe from "./pages/aboutPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
