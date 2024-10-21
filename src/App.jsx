import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Speakers_Main from "./components/Speakers_Main.jsx";
import Teams from "./components/Teams.jsx";
// import Preloader from './components/Preloader.jsx';


function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Simulating the loading process
  //   window.addEventListener('load', () => {
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 1000);  // Add a delay to simulate loading time
  //   });
  // }, []);

  return (
    <>
      {/* {loading && <Preloader />}
      <div className={loading ? 'hidden' : 'block'}> */}
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
           </Routes>
        
        {/* Footer Component */}
        <Footer />
        </Router>
      {/* </div> */}
    </>
  );
}

export default App;
