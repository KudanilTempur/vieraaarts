import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Commission from "./pages/Commission";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8FAFC]">
        <Navbar className="fixed top-0 left-0 z-50 w-full" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/commission" element={<Commission />} />
        </Routes>

        <Footer className="fixed bottom-0 left-0 z-50 w-full" />
      </div>
    </Router>
  );
}