
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractivePuzzle from './components/InteractivePuzzle';
import WhyN8N from './components/WhyN8N';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import GeminiConsultant from './components/GeminiConsultant';

const App: React.FC = () => {
  useEffect(() => {
    // Basic interaction tracking or init
    console.log("ChialastriAutomações App Initialized - 2026 Ready");
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <InteractivePuzzle />
        <WhyN8N />
        <Benefits />
        <GeminiConsultant />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
