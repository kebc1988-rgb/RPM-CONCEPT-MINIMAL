import React from 'react';
import { Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              We're Not a Franchise. <br/>
              <span className="text-gray-500">We're Your Neighbors.</span>
            </h2>
            
            <div className="prose prose-lg text-gray-400 mb-8">
              <p>
                Big dealerships have quotas. Chain shops have managers breathing down their necks to sell air filters.
              </p>
              <p>
                At RPM Concepts, it's just us. When you call, you're talking to me (Chuck) or one of my lead mechanics. We diagnose the car, call you with the truth, and fix it if you say yes.
              </p>
              <p>
                If your car doesn't need it, we won't sell it. That's how we sleep at night, and that's why our customers keep coming back.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
               <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden border-2 border-brand-green">
                 <img src="https://picsum.photos/seed/chuck/100/100" alt="Chuck the Owner" className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="text-white font-bold text-lg font-display uppercase tracking-wide">{BUSINESS_INFO.owner}</p>
                 <p className="text-brand-green text-sm font-bold">Owner / Lead Mechanic</p>
               </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="relative order-1 lg:order-2 group">
             <div className="absolute -inset-2 bg-brand-green/20 rounded-sm transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
             <div className="absolute -inset-2 bg-gray-700/30 rounded-sm transform -rotate-1 group-hover:rotate-0 transition-transform duration-500 delay-75"></div>
             <img 
              src="https://picsum.photos/seed/autoshopinterior/800/800" 
              alt="Inside the shop" 
              className="relative w-full h-full object-cover rounded-sm shadow-2xl border border-gray-700 grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -left-6 bg-brand-surface p-6 rounded shadow-xl border-l-4 border-brand-green max-w-xs hidden md:block">
              <Quote className="text-brand-green mb-2 opacity-50" size={24} />
              <p className="text-gray-300 italic text-sm">
                "Simple, honest work. That's all we do here."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;