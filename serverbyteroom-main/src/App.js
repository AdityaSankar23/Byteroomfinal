import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./components/Discover";
import Home from "./components/Home";
import CardPage from "./components/CardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/card" element={<CardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
