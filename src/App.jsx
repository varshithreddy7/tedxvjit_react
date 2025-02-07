import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Speakers_Main from "./components/Speakers_Main.jsx";
import Teams from "./components/Teams.jsx";
import Gallery from "./components/Gallery.jsx";

function App() {
  return (
    <>
      {/* Your main app content goes here */}
      <Router>
        <Navbar />

        {/* Content */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/speakers" element={<Speakers_Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>

        {/* Footer Component */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
