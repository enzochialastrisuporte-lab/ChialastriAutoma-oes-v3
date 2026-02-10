
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contato" className="py-20 px-6 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Pronto para o próximo nível?</h2>
            <p className="text-gray-400 text-lg">Pare de gastar tempo com o que Enzo Chialastri pode automatizar para você.</p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black hover:bg-gray-200 rounded-2xl text-xl font-bold transition-all shadow-2xl flex items-center gap-3 active:scale-95"
          >
            Falar com Enzo agora
            <span className="text-2xl">🔥</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center font-bold">C</div>
              <span className="font-bold text-lg">ChialastriAutomações</span>
            </div>
            <p className="text-gray-500 text-sm">
              Enzo Chialastri: Especialista em transformar empresas através da lógica e automação com n8n.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')} className="hover:text-blue-400">Início</a></li>
              <li><a href="#solucoes" onClick={(e) => scrollToSection(e, 'solucoes')} className="hover:text-blue-400">Soluções</a></li>
              <li><a href="#n8n" onClick={(e) => scrollToSection(e, 'n8n')} className="hover:text-blue-400">Por que n8n?</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-blue-400">WhatsApp Enzo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">In</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">Ig</div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">Yb</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-gray-600 text-xs">
          &copy; 2026 ChialastriAutomações por Enzo Chialastri. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
