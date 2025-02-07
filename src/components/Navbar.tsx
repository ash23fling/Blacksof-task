import React, { useState } from "react";

const Navbar: React.FC = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-md">
      {/* Top row container */}
      <div className="flex items-center justify-between">
        {/* Left: Logo and Business Name */}
        <div className="flex items-center space-x-4">
          <img src="/logo.webp" alt="Company Logo" className="h-10" />
          {/* Hide text on very small screens */}
          <span className="hidden sm:block text-lg font-medium">SUPREME GROUP</span>
        </div>
        
        {/* Desktop Nav Items (visible on md and larger) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded transition">
            Contact Us
          </button>
          <i className="fa fa-linkedin hover:text-blue-400 cursor-pointer transition-colors" />
          <i className="fa fa-twitter hover:text-blue-400 cursor-pointer transition-colors" />
        </div>
        
        {/* Mobile Hamburger Icon (visible on small screens) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon using SVG */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mt-4 md:hidden">
          <div className="flex flex-col space-y-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition">
              Contact Us
            </button>
            <div className="flex space-x-4">
              <i className="fa fa-linkedin hover:text-blue-400 cursor-pointer transition-colors" />
              <i className="fa fa-twitter hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
