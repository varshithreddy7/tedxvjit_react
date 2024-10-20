import React, { useRef } from "react";
// import videoBackground from "../images/contact_us.mp4";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const contactRef = useRef(null);
  const collegeRef = useRef(null);

  const resetForm = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    contactRef.current.value = "";
    collegeRef.current.value = "";
  };

  return (
    <div className="relative h-screen overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/primary/contact_us.mp4" type="video/mp4" />
        
      </video>

      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-lg p-5 mx-auto bg-transparent backdrop-blur-md rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              className="img-fluid pb-2"
              id="pic"
              src="/primary/TEDxVJIT_Navbar_About.png"
              alt=""
            />
            <span className="mt-3 text-white text-2xl">CONTACT US</span>
          </div>

          <div className="mt-5">
            <form className="space-y-4">
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="NAME"
                  ref={nameRef}
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="EMAIL"
                  ref={emailRef}
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="CONTACT NO"
                  ref={contactRef}
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="COLLEGE NAME"
                  ref={collegeRef}
                />
              </div>
              <div className="text-right">
                <button
                  className="relative inline-flex items-center justify-center px-6 py-2 text-white transition-all duration-300 bg-red-600 rounded-full group overflow-hidden"
                  onClick={resetForm}
                >
                  <span className="absolute left-0 w-0 h-1  group-hover:w-full"></span>
                  <span className="relative">Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
