import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-brand-surface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              Stop By The Shop
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              We're located on Lillian Hwy. Old school service, modern tools.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-brand-dark p-4 rounded border border-gray-700 text-brand-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-1 uppercase tracking-wide">Location</h3>
                  <p className="text-gray-300 text-lg">{BUSINESS_INFO.address}</p>
                  <p className="text-gray-500 text-sm mt-2 flex items-center gap-1">
                    <Navigation size={12} />
                    {BUSINESS_INFO.addressNotes}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-brand-dark p-4 rounded border border-gray-700 text-brand-green shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-1 uppercase tracking-wide">Phone</h3>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`} className="text-2xl font-bold text-white hover:text-brand-green transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">If we don't pick up, we're under a car. Leave a message.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-brand-dark p-4 rounded border border-gray-700 text-brand-green shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-xl mb-1 uppercase tracking-wide">Hours</h3>
                  <div className="text-gray-300 space-y-1 mt-1">
                    {BUSINESS_INFO.hoursArray.map((hour, idx) => (
                      <p key={idx}>{hour}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-[500px] lg:h-auto bg-brand-dark rounded-sm overflow-hidden border-2 border-gray-700 shadow-2xl relative group">
            <iframe 
              src={BUSINESS_INFO.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Map Location"
              className="group-hover:filter-none transition-all duration-500"
            ></iframe>
            
            {/* Overlay hint */}
            <div className="absolute bottom-4 left-4 bg-brand-dark/90 backdrop-blur px-4 py-2 rounded border border-gray-600 pointer-events-none">
                <p className="text-xs text-white uppercase font-bold tracking-wider">Lillian Hwy Area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;