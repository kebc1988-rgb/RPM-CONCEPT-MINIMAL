import React from 'react';
import { REVIEWS } from '../constants';
import { Star, MessageCircle } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-surface border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
            What The Neighbors Say
          </h2>
          <p className="text-gray-400">We don't pay for ads. We rely on word of mouth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="flex flex-col h-full">
              <div className="bg-brand-dark p-8 rounded-t-lg border-x border-t border-gray-700 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex text-brand-green">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-xs font-bold uppercase tracking-wider">Verified</span>
                </div>
                <p className="text-gray-200 mb-6 text-lg font-light leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-gray-400 font-display">
                    {review.name.charAt(0)}
                  </div>
                  <span className="text-white font-bold font-display tracking-wide uppercase">{review.name}</span>
                </div>
              </div>
              
              {/* Owner Response */}
              {review.response && (
                <div className="bg-gray-800/50 p-6 rounded-b-lg border-x border-b border-gray-700 ml-4 border-l-brand-green border-l-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle size={14} className="text-gray-500" />
                    <span className="text-xs font-bold text-gray-500 uppercase">Response from the Owner</span>
                  </div>
                  <p className="text-gray-400 text-sm italic">"{review.response}"</p>
                </div>
              )}
              {!review.response && (
                 <div className="bg-brand-dark p-2 rounded-b-lg border-x border-b border-gray-700"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border-b-2 border-brand-green text-white font-bold pb-1 hover:text-brand-green transition-colors uppercase tracking-widest text-sm"
          >
            Read all reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;