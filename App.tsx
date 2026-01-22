import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyMobileCall from './components/StickyMobileCall';
import AppointmentModal from './components/AppointmentModal';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen font-sans bg-brand-dark text-gray-100 selection:bg-brand-green selection:text-white">
      <Navbar onRequestAppt={openModal} />
      <main>
        <Hero onRequestAppt={openModal} />
        <Services />
        <WhyUs />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCall onRequestAppt={openModal} />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
      <ChatWidget />
    </div>
  );
};

export default App;