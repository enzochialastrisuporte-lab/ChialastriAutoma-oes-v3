
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Atualiza a URL sem recarregar a página
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center glass border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-600/20">
          C
        </div>
        <span className="font-bold text-lg tracking-tight hidden sm:block">ChialastriAutomações</span>
      </div>
      
      <div className="hidden lg:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-blue-400 transition-colors">Início</a>
        <a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-blue-400 transition-colors">Soluções</a>
        <a href="#n8n" onClick={(e) => scrollToSection(e, 'n8n')} className="hover:text-blue-400 transition-colors">Tecnologia</a>
        <a href="#hospedagem" onClick={(e) => scrollToSection(e, 'hospedagem')} className="hover:text-blue-400 transition-colors">Hospedagem</a>
        <a href="#contato" onClick={(e) => scrollToSection(e, 'contato')} className="hover:text-blue-400 transition-colors">Contato</a>
      </div>

      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-600/25 active:scale-95 flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        Enzo Chialastri
      </a>
    </nav>
  );
};

export default Navbar;
