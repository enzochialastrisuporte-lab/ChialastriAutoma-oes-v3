
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Especialista n8n • Futuro da Automação
          </div>

          <h1 className="text-5xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] text-white">
            Escale sem <br/> <span className="text-blue-600">limites</span> manuais.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Criamos arquiteturas de automação ultra-eficientes com <strong>n8n</strong>. Transforme processos complexos em fluxos que geram lucro 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 active:scale-95 group"
            >
              Começar minha automação
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="#solucoes"
              className="px-8 py-5 glass border-white/10 text-white rounded-2xl text-lg font-bold hover:bg-white/5 transition-all text-center"
            >
              Ver Soluções
            </a>
          </div>
        </div>

        <div className="relative group">
          {/* Mockup n8n Designer */}
          <div className="relative glass p-6 md:p-10 rounded-[2.5rem] border-white/5 shadow-3xl shadow-blue-500/5 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>
            
            <div className="flex flex-col gap-12 relative z-10">
              <div className="flex justify-between items-center opacity-40 font-mono text-[10px]">
                <span>WORKFLOW: SMART_REVENUE_ENGINE</span>
                <span className="flex items-center gap-1"><span className="w-1 h-1 bg-green-500 rounded-full"></span> 100% ONLINE</span>
              </div>

              {/* Node Sequence */}
              <div className="flex flex-col items-center gap-10">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 text-2xl">⚡</div>
                
                <div className="h-10 w-px bg-gradient-to-b from-orange-500 via-blue-500 to-indigo-500 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/20 rounded-full blur-sm animate-pulse"></div>
                </div>

                <div className="p-4 glass border-blue-500/40 rounded-2xl flex items-center gap-4 w-full md:w-3/4 animate-float">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-lg">🤖</div>
                  <div className="text-left">
                    <div className="text-[10px] text-blue-400 font-bold uppercase">Logic Processing</div>
                    <div className="text-xs font-bold text-white">Gemini 3 Flash Analysis</div>
                  </div>
                  <div className="ml-auto flex gap-1">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-blue-400/40 rounded-full"></div>
                  </div>
                </div>

                <div className="h-10 w-px bg-indigo-500"></div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 rounded-xl border border-green-500/30 bg-green-500/5 text-center">
                    <div className="text-[10px] text-green-400 font-bold mb-1">SUCCESS</div>
                    <div className="text-[10px] opacity-60">WhatsApp Send</div>
                  </div>
                  <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 text-center">
                    <div className="text-[10px] text-blue-400 font-bold mb-1">SYNC</div>
                    <div className="text-[10px] opacity-60">Update CRM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>

          {/* Floating Badges */}
          <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-[10px] font-bold text-blue-400 border-blue-500/20 shadow-xl animate-bounce">
            +300% EFICIÊNCIA
          </div>
          <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl text-[10px] font-bold text-green-400 border-green-500/20 shadow-xl">
            ERRORS: 0.00%
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
