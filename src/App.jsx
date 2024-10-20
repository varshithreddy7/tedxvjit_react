import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Speakers_Main from "./components/Speakers_Main";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Teams from "./components/Teams";

import About from "./components/About";
import Contact from "./components/Contact";
import Hello from "./components/Hello";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        {" "}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/speakers" element={<Speakers_Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test" element={<Hello />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
