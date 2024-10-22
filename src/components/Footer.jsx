import React from "react";
import { Link } from "react-router-dom";
// import tedxvjitlogo from "../images/Tedxvjit.png";
const Footer = () => {
  return (
    <footer className="relative bg-black   text-white py-5">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between px-5">
        {/* Left Section - Logo and Links */}
        <div className="flex flex-col items-start md:w-1/3 mb-5 md:mb-0">
          <img
            src="https://ik.imagekit.io/tedxvjit/public/home/TEDxVJIT_Navbar_About.png?updatedAt=1729522783035"
            alt="TEDxVJIT Logo"
            className="max-w-[150px] mb-2"
          />
          <ul className="list-none p-0">
            <li className="cursor-pointer text-gray-400 hover:text-red-600 mb-2">
              <Link to="/teams" className="text-gray-400 hover:text-red-600">
                Team
              </Link>
            </li>
            <li className="text-gray-400 hover:text-red-600">
            <Link to="/about" className="text-gray-400 hover:text-red-600">About Us</Link>
            </li>
          </ul>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex flex-col items-start md:w-1/3 mb-5 md:mb-0">
          <h3 className="text-xl mb-2">
            Let's <span className="text-red-600">Connect</span>
          </h3>
          <ul className="list-none p-0">
            <li className="flex items-center text-gray-400 hover:text-red-600 mb-2">
              <i className="fab fa-youtube mr-2"></i> 
              <Link to="https://youtube.com/channel/tedxvjit" target="_blank" >Youtube</Link>
            </li>
            <li className="flex items-center text-gray-400 hover:text-blue-600 mb-2">
              <i className="fab fa-linkedin mr-2"></i>
              <Link to="https://www.linkedin.com/company/tedxvjit/" target="_blank">Linkedin</Link> 
            </li>
            <li className="flex items-center text-gray-400 hover:text-pink-600 mb-2">
              <i className="fab fa-instagram mr-2"></i>
              <Link to="https://www.instagram.com/tedxvjit" target="_blank">Instagram</Link> 
            </li>
            <li className="flex items-center text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter mr-2"></i>
              <Link to="https://www.twitter.com/tedxvjit/"target="_blank" >Twitter</Link> 
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col items-start md:w-1/3">
          <h3 className="text-xl mb-2">Contact Us</h3>
          <p className="flex items-center text-gray-400 hover:text-red-600 mb-2">
            <i className="fas fa-envelope mr-2"></i>
            <a href="mailto:tedx@vjit.ac.in">tedx@vjit.ac.in</a>
          </p>
          <p className="flex items-center text-gray-400 hover:text-red-600 mb-2">
            <i className="fas fa-phone mr-2"></i>
            <a href="tel:+91 9866487922">+91 9866487922</a> 
          </p>
          <p className="flex items-center text-gray-400 hover:text-red-600 mb-2">
            <i className="fas fa-phone mr-2"></i>
            <a href="tel:+91 8121403233">+91 8121403233</a> 
          </p>
          <p className="flex items-center text-gray-400 hover:text-red-600">
            <i className="fas fa-phone mr-2"></i>
            <a href="tel:+91 8106993270">+91 8106993270</a> 
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full text-red-600 mt-5">
        <p className="text-center">
          Copyright © 2024 - TEDxVJIT. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
