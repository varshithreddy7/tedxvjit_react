import React, { useRef } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_lzicnqs", // Replace with your EmailJS service ID
        "template_9q6vq1g", // Replace with your EmailJS template ID
        form.current,
        "35NyBlKBrRLwj3lEi" // Replace with your EmailJS user ID (or public key if you use one)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          resetForm(); // Reset form after sending
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message.");
        }
      );
  };

  const resetForm = () => {
    form.current.reset(); // Reset form inputs
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/contact/contact_us.mp4" type="video/mp4" />
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
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="NAME"
                  name="name" // Add name attribute
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="EMAIL"
                  name="email" // Add name attribute
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="CONTACT NO"
                  name="contact" // Add name attribute
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-3 rounded-lg bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  placeholder="COLLEGE NAME"
                  name="college" // Add name attribute
                  required
                />
              </div>
              <div className="text-right">
                <button
                  type="submit" // Change to type="submit"
                  className="relative inline-flex items-center justify-center px-6 py-2 text-white transition-all duration-300 bg-red-600 rounded-full group overflow-hidden"
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
