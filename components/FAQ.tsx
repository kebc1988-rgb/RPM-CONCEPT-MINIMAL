import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 text-center uppercase">
          Common Questions
        </h2>
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-brand-surface rounded-sm border border-gray-700 overflow-hidden"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-bold text-white font-display uppercase tracking-wide">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-green" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-700 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;