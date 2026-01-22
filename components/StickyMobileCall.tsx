import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface StickyMobileCallProps {
  onRequestAppt: () => void;
}

const StickyMobileCall: React.FC<StickyMobileCallProps> = ({ onRequestAppt }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex h-20 shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
      <button 
        onClick={onRequestAppt}
        className="flex-1 bg-brand-surface text-white font-bold flex flex-col items-center justify-center border-t border-gray-700 active:bg-gray-800"
      >
        <Calendar size={20} className="mb-1 text-gray-400" />
        <span className="text-xs uppercase tracking-wide">Appointment</span>
      </button>
      <a 
        href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} 
        className="flex-[2] bg-brand-green text-white font-bold flex items-center justify-center gap-2 text-lg active:bg-brand-greenHover"
      >
        <Phone size={24} fill="currentColor" />
        CALL NOW
      </a>
    </div>
  );
};

export default StickyMobileCall;