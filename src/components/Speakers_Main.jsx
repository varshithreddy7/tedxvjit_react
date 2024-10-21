import React, { useState, useEffect } from 'react';
import Speaker_Mobile from './Speaker_Mobile';
import Speaker_Desktop from './Speaker_Desktop';

const Speakers_Main = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Custom hook logic to update window size
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallScreen = windowSize.width < 768;

  return (
    <div>
      {isSmallScreen ? <Speaker_Mobile /> : <Speaker_Desktop />}
    </div>
  );
};

export default Speakers_Main;
