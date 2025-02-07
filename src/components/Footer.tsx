import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
      
        {/* Logo & Company Name */}
        <div className="text-center space-y-4">
          <img
            src="/logo.webp" 
            alt="Company Logo"
            className="mx-auto h-10 w-14 transition-transform transform hover:scale-110"
          />
          <h3 className="text-xl font-semibold text-blue-400">
            SUPREME GROUP
          </h3>
        </div>
        
        {/* Applications Column */}
        <div>
          <h4 className="font-bold mb-4">APPLICATIONS</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Apparel</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Automotive</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Filtration</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Customized Solutions</a>
            </li>
          </ul>
        </div>
        
        {/* Company Column */}
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Innovation</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Global Competency</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a>
            </li>
          </ul>
        </div>
        
        {/* More Column */}
        <div>
          <h4 className="font-bold mb-4">MORE</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Careers</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        
        {/* Follow Us Column */}
        <div>
          <h4 className="font-bold mb-4">FOLLOW US</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition duration-300">Medium</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-gray-400 text-xs">
        <p>©2023. All Rights Reserved.</p>
        <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
      </div>
    </footer>
  );
};

export default Footer;
