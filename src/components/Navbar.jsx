import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi'; // For the hamburger icon
import { MdClose } from 'react-icons/md'; // For the close icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50" >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-around h-16">
          {/* Logo */}
          <div className="flex items-center">
           <a href="/"> <img className="h-10 w-auto" src="https://ik.imagekit.io/tedxvjit/public/home/TEDxVJIT_Navbar_About.png?updatedAt=1729522783035" alt="TEDxVJIT" /></a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden sm:flex sm:space-x-8 sm:ml-6 sm:items-center">
            <a
              href="/"
              className="rounded-md px-3 py-2 text-base md:text-sm lg:text-lg font-normal text-white hover:text-red-500 hover:py-1"
            >
              Home
            </a>
            <a
              href="/about"
              className="rounded-md px-3 py-2 text-base md:text-sm lg:text-lg font-normal text-white hover:text-red-500 hover:py-1"
            >
              About Us
            </a>
            <a
              href="/teams"
              className="rounded-md px-3 py-2 text-base md:text-sm lg:text-lg font-normal text-white hover:text-red-500 hover:py-1"
            >
              Team
            </a>
            <a
              href="/speakers"
              className="rounded-md px-3 py-2 text-base md:text-sm lg:text-lg font-normal text-white hover:text-red-500 hover:py-1"
            >
              Speakers
            </a>
            <a
              href="/gallery"
              className="rounded-md px-3 py-2 text-base md:text-sm lg:text-lg font-normal text-white hover:text-red-500 hover:py-1"
            >
              Gallery
            </a>
            <a
              href="/contact"
              className="rounded-md px-3 py-2 text-base md:text-sm lg:text-lg font-normal text-white hover:text-red-500 hover:py-1"
            >
              Contact Us
            </a>
            
            {/* Get Tickets Button */}
            <div className="hidden sm:block">
              <a
                href="https://vpulse.campx.in/vpulse/ums/public/form/66fa6054c2cf83d3a9e6da9e" target='_blank'
                className="rounded-md bg-red-500 px-4 py-2 md:px-3 md:py-1 text-base md:text-sm lg:text-lg font-normal text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
              >
                Get Tickets
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={handleToggleMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <MdClose className="h-6 w-6" />  // Replacing SVG with react-icons
              ) : (
                <HiMenu className="h-6 w-6" />   // Replacing SVG with react-icons
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="/" className="block rounded-md px-3 py-2 text-base font-normal text-white hover:text-red-500 hover:py-1">
            Home
          </a>

          <a href="/about" className="block rounded-md px-3 py-2 text-base font-normal text-white hover:text-red-500 hover:py-1">
            About Us
          </a>
          <a href="/teams" className="block rounded-md px-3 py-2 text-base font-normal text-white hover:text-red-500 hover:py-1">
            Team
          </a>
          <a href="/speakers" className="block rounded-md px-3 py-2 text-base font-normal text-white hover:text-red-500 hover:py-1">
            Speakers
          </a>
          <a href="/contact" className="block rounded-md px-3 py-2 text-base font-normal text-white hover:text-red-500 hover:py-1">
            Contact Us
          </a>
          

          {/* Mobile Contact Button */}
          <a
            href="https://forms.gle/XR1aYp11q7LLoHKu5"target='_blank'
            className="inline w-auto rounded-md bg-red-600 px-3 py-2 text-base font-normal text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
          >
            Get Tickets
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
