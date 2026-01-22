import React, { useState } from 'react';
import { X, Calendar, CheckCircle, Clock, Wrench } from 'lucide-react';
import { SERVICES } from '../constants';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    service: SERVICES[0].title,
    date: '',
    time: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call to backend/email service
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-brand-surface border border-gray-700 w-full max-w-lg rounded-lg shadow-2xl p-6 relative my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 border-b border-gray-700 pb-4">
              <h2 className="text-3xl font-display font-bold text-white mb-2 flex items-center gap-2 uppercase">
                <Calendar className="text-brand-green" /> Book Appointment
              </h2>
              <p className="text-gray-400 text-sm">
                Select a time, and we'll confirm it via email or text shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Select Service</label>
                <div className="relative">
                  <Wrench className="absolute left-3 top-3 text-gray-500" size={18} />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-brand-dark border border-gray-700 rounded p-3 pl-10 text-white focus:border-brand-green focus:outline-none appearance-none"
                  >
                    {SERVICES.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Date</label>
                   <input 
                      type="date"
                      name="date"
                      required
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-gray-700 rounded p-3 text-white focus:border-brand-green focus:outline-none" 
                   />
                </div>
                <div>
                   <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">Time</label>
                   <div className="relative">
                     <Clock className="absolute left-3 top-3 text-gray-500" size={18} />
                     <select
                       name="time"
                       required
                       onChange={handleChange}
                       className="w-full bg-brand-dark border border-gray-700 rounded p-3 pl-10 text-white focus:border-brand-green focus:outline-none appearance-none"
                     >
                       <option value="">Select...</option>
                       <option value="09:00">9:00 AM</option>
                       <option value="10:00">10:00 AM</option>
                       <option value="11:00">11:00 AM</option>
                       <option value="12:00">12:00 PM</option>
                       <option value="13:00">1:00 PM</option>
                       <option value="14:00">2:00 PM</option>
                       <option value="15:00">3:00 PM (Mon-Fri)</option>
                       <option value="16:00">4:00 PM (Mon-Fri)</option>
                     </select>
                   </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-1">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-gray-700 rounded p-3 text-white focus:border-brand-green focus:outline-none"
                      placeholder="Chuck Yeager"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-gray-700 rounded p-3 text-white focus:border-brand-green focus:outline-none"
                      placeholder="(850) 555-0123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-1">Vehicle Info</label>
                    <input 
                      type="text" 
                      name="vehicle"
                      required
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-gray-700 rounded p-3 text-white focus:border-brand-green focus:outline-none"
                      placeholder="2012 Ford F-150"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-greenHover text-white font-bold font-display uppercase tracking-wider text-lg py-4 rounded transition-colors shadow-lg shadow-brand-green/20 mt-4"
              >
                Confirm Booking
              </button>
              <p className="text-xs text-center text-gray-500">
                We will send a confirmation to your phone/email shortly.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="flex justify-center mb-6">
              <CheckCircle size={80} className="text-brand-green" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase">You're Booked!</h3>
            <p className="text-gray-300 mb-2">
              Thanks <strong>{formData.name}</strong>.
            </p>
            <p className="text-gray-400 mb-8 max-w-xs mx-auto">
              We have you down for a <strong>{formData.service}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
            </p>
            <button 
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentModal;