import React from 'react';
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className="w-full bg-blue text-white clip-curve">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row justify-between mt-20 items-center">
          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 mb-8 md:mb-0">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Company</h4>
              <ul>
                <li><a href="/" className="hover:underline">About Us</a></li>
                <li><a href="/" className="hover:underline">Careers</a></li>
                <li><a href="/" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Documents</h4>
              <ul>
                <li><a href="/" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/" className="hover:underline">Terms of Service</a></li>
                <li><a href="/" className="hover:underline">Return Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Company Name */}
          <div className="text-center">
            <img src={logo} className='w-[200px]' alt="" />
          </div>
        </div>
      </div>
      <div className="bg-blue-900 py-4 text-center text-sm">
        <p className='font-semibold'>&copy; {new Date().getFullYear()} emPOWRER. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
