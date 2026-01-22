import React from 'react';
import { ShieldCheck, Calendar, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeroProps {
  onRequestAppt: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestAppt }) => {
  return (
    <div className="relative bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/mechanichands/1920/1080" 
          alt="Mechanic working on engine" 
          className="w-full h-full object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent md:bg-gradient-to-r"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-6 bg-brand-green/10 border border-brand-green/20 px-4 py-2 rounded-full">
            <ShieldCheck className="text-brand-green w-5 h-5" />
            <span className="text-brand-green font-bold uppercase tracking-wider text-xs md:text-sm">Locally Owned & Operated since 2005</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-none uppercase">
            No Salesmen.<br />
            Just <span className="text-brand-green">Mechanics.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed font-light">
            We fix what's broken. We don't sell you what's not. Straightforward auto repair for our neighbors in Pensacola.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
              className="flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-greenHover text-white text-lg font-bold px-8 py-4 rounded transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-green/25 font-display uppercase tracking-wide"
            >
              <Phone size={20} />
              Call Chuck: {BUSINESS_INFO.phone}
            </a>
            <button 
              onClick={onRequestAppt}
              className="flex items-center justify-center gap-3 bg-transparent border-2 border-gray-600 hover:border-white text-white text-lg font-bold px-8 py-4 rounded transition-all hover:bg-white/5 font-display uppercase tracking-wide"
            >
              <Calendar size={20} />
              Book a Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;