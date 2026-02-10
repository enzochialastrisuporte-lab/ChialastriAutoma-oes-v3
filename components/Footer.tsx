
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Pronto para parar de <br className="hidden md:block"/> perder tempo?</h2>
            <p className="text-gray-400 text-lg">Enzo Chialastri está pronto para transformar sua operação com tecnologia de ponta.</p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-white text-black hover:bg-blue-600 hover:text-white rounded-3xl text-2xl font-black transition-all shadow-2xl flex items-center gap-4 active:scale-95 group"
          >
            Falar com Enzo agora
            <span className="group-hover:translate-x-2 transition-transform">🔥</span>
          </a>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-xs font-bold tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">C</div>
            <span>ChialastriAutomações</span>
          </div>
          <div className="flex gap-8">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#solucoes" className="hover:text-white transition-colors">Soluções</a>
            <a href="#n8n" className="hover:text-white transition-colors">n8n</a>
          </div>
          <div>© 2026 • Enzo Chialastri</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
