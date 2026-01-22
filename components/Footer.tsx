import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800 mb-20 md:mb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl font-black text-white uppercase mb-4 font-display">
          RPM <span className="text-brand-green">Concepts</span>
        </p>
        <div className="flex justify-center gap-6 mb-8 text-gray-400 text-sm font-bold uppercase">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#why-us" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. <br/>
          Designed for Honest Locals.
        </p>
      </div>
    </footer>
  );
};

export default Footer;