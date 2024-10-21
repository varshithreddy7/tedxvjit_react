import React from 'react';

const Preloader = () => {
  return (
    <div id="preloader" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Preloader;
