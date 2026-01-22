import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface NavbarProps {
  onRequestAppt: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRequestAppt }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Chuck', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <nav className="bg-brand-surface border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex flex-col group">
              <span className="text-2xl font-display font-bold text-white tracking-tight uppercase group-hover:text-brand-green transition-colors">
                RPM <span className="text-brand-green group-hover:text-white transition-colors">Concepts</span>
              </span>
              <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-bold">Est. 2005 • Pensacola</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-300 hover:text-white text-sm font-bold uppercase tracking-wide transition-colors font-display"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="flex items-center gap-2 text-white font-bold bg-brand-dark py-2 px-4 rounded border border-gray-700 hover:border-brand-green transition-colors"
            >
              <Phone size={16} className="text-brand-green" />
              <span className="font-display tracking-wide">{BUSINESS_INFO.phone}</span>
            </a>
            <button 
              onClick={onRequestAppt}
              className="bg-brand-green hover:bg-brand-greenHover text-white px-5 py-2 rounded font-bold shadow-md hover:shadow-lg transition-all font-display uppercase tracking-wide"
            >
              Book Time
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
             <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="text-white font-bold"
            >
              <Phone size={24} className="text-brand-green" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-surface border-t border-gray-800 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 hover:text-white hover:bg-brand-dark block px-3 py-4 rounded-md text-xl font-bold uppercase border-l-4 border-transparent hover:border-brand-green font-display"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-3 pb-2">
               <button 
                onClick={() => {
                  onRequestAppt();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-brand-green hover:bg-brand-greenHover text-white px-5 py-4 rounded font-bold text-center uppercase font-display tracking-wider text-lg"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;