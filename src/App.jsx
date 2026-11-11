import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Explore from "./pages/Explore";
import ExploreMap from "./pages/ExploreMap";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/explore-map" element={<ExploreMap />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;