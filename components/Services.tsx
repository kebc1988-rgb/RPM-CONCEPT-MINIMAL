import React from 'react';
import { SERVICES } from '../constants';
import { AlertCircle } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">No Fluff. Just Fixes.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We focus on keeping your car running safely. We don't do fancy detailing or custom mods. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-dark p-8 rounded-sm border border-gray-800 hover:border-gray-600 transition-colors group relative overflow-hidden"
            >
              {service.highlight && (
                 <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-green/20 to-transparent"></div>
              )}
              <div className={`w-12 h-12 rounded flex items-center justify-center mb-6 ${service.highlight ? 'bg-brand-green text-white' : 'bg-gray-800 text-gray-400 group-hover:text-white'}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-green transition-colors uppercase">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 text-sm bg-brand-dark py-4 px-6 rounded-full inline-flex mx-auto border border-gray-800">
          <AlertCircle size={16} />
          <p>Don't see what you need? Call us. If we can't fix it, we know who can.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;