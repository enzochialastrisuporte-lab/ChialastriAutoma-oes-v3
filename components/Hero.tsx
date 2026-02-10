
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-40 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-blue-500/20 text-blue-400 text-sm font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
          AUTOMAÇÃO 2026: EXPERT EM N8N
        </div>

        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[1] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Automatize seu negócio <br className="hidden md:block" /> de forma <span className="text-blue-600 italic">inteligente.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
          Usamos <strong>n8n</strong> para criar fluxos personalizados e escaláveis que libertam sua equipe do trabalho manual e multiplicam seus resultados.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-xl font-black transition-all shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3 active:scale-95 group"
          >
            Quero automatizar minha empresa
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a 
            href="#solucoes"
            className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/5 text-white rounded-2xl text-xl font-bold transition-all border-white/10"
          >
            Conhecer soluções
          </a>
        </div>

        {/* Mock n8n Interface */}
        <div className="relative max-w-5xl mx-auto glass rounded-3xl p-4 md:p-8 border-white/5 glow-blue group">
           <div className="absolute inset-0 bg-zinc-950/40 rounded-3xl pointer-events-none"></div>
           <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 py-10">
              <div className="w-20 h-20 rounded-2xl bg-orange-600 flex items-center justify-center shadow-xl animate-pulse">
                <span className="font-black">START</span>
              </div>
              
              <div className="hidden md:block w-32 h-[2px] bg-gradient-to-r from-orange-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 animate-[flow_2s_linear_infinite]"></div>
              </div>

              <div className="p-6 glass border-blue-500/30 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">🧠</div>
                <div className="text-left">
                  <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">IA Processing</div>
                  <div className="text-sm font-bold">Gemini 3 Flash</div>
                </div>
              </div>

              <div className="hidden md:block w-32 h-[2px] bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/40 animate-[flow_2s_linear_infinite_0.5s]"></div>
              </div>

              <div className="w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center shadow-xl">
                <span className="font-black">DONE</span>
              </div>
           </div>
           
           <div className="flex justify-center gap-3 mt-4 opacity-50 text-[10px] font-mono">
              <span className="text-blue-500">n8n v2.0</span>
              <span>-</span>
              <span>Execução 100% Ok</span>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
