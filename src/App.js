import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
