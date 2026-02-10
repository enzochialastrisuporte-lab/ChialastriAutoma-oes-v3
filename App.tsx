
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractivePuzzle from './components/InteractivePuzzle';
import WhyN8N from './components/WhyN8N';
import GeminiConsultant from './components/GeminiConsultant';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <InteractivePuzzle />
        <WhyN8N />
        <GeminiConsultant />
        <Benefits />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
