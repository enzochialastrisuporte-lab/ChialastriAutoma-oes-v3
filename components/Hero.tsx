
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const WorkflowGroup = ({ color, title, children }: { color: string, title: string, children?: React.ReactNode }) => (
  <div className={`p-3 rounded-xl border ${color} bg-slate-900/40 backdrop-blur-md shadow-2xl relative min-w-[200px]`}>
    <div className={`text-[9px] font-bold uppercase tracking-widest mb-3 opacity-70`}>{title}</div>
    <div className="flex gap-2">
      {children}
    </div>
  </div>
);

const Node = ({ color }: { color: string }) => (
  <div className={`w-10 h-10 rounded border border-white/10 ${color} flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-crosshair`}>
    <div className="w-4 h-4 rounded-sm bg-white/20"></div>
  </div>
);

const Hero: React.FC = () => {
  const handleScrollToSolucoes = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('solucoes');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center relative scroll-mt-24">
      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
        Enzo Chialastri - Automação 2026
      </div>
      
      <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
        Automatize sua empresa de forma <br className="hidden md:block"/> inteligente com o que há de melhor.
      </h1>
      
      <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
        <strong>Enzo Chialastri</strong>: Especialista em <span className="text-blue-400 font-semibold">n8n</span> para criar fluxos complexos, escaláveis e inteligentes para empresas que buscam eficiência máxima.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-bold transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 group"
        >
          Falar com Enzo agora
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a 
          href="#solucoes"
          onClick={handleScrollToSolucoes}
          className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl text-lg font-bold border border-white/10 transition-all flex items-center justify-center"
        >
          Ver soluções
        </a>
      </div>
      
      <div className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[550px] bg-[#0d1117] rounded-3xl border border-white/10 overflow-hidden shadow-2xl group flex items-center justify-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>
        
        <svg className="absolute inset-0 w-full h-full stroke-blue-500/20 fill-none" viewBox="0 0 1000 500">
           <path d="M100,250 C200,250 200,100 300,100" strokeWidth="2" />
           <path d="M300,100 L500,100" strokeWidth="2" />
           <path d="M100,250 C200,250 200,400 300,400" strokeWidth="2" />
           <path d="M300,400 L500,400" strokeWidth="2" />
           <path d="M500,100 C600,100 650,250 750,250" strokeWidth="2" />
           <path d="M500,400 C600,400 650,250 750,250" strokeWidth="2" />
           <path d="M750,250 L900,250" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />
        </svg>

        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="p-4 bg-orange-600 rounded-lg shadow-xl shadow-orange-600/20 flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xs">TRIGGER</span>
          </div>
          <div className="flex flex-col gap-12">
            <WorkflowGroup color="border-green-500/30" title="Data Ingestion">
              <Node color="bg-green-600/80" />
              <Node color="bg-green-600/80" />
              <Node color="bg-green-600/80" />
            </WorkflowGroup>
            <WorkflowGroup color="border-blue-500/30" title="Gemini Intelligence">
              <Node color="bg-blue-600/80" />
              <Node color="bg-indigo-600/80" />
            </WorkflowGroup>
          </div>
          <div className="flex flex-col gap-12">
             <WorkflowGroup color="border-red-500/30" title="Actions & Notif">
              <Node color="bg-red-600/80" />
              <Node color="bg-red-600/80" />
            </WorkflowGroup>
            <WorkflowGroup color="border-purple-500/30" title="Persistence">
              <Node color="bg-purple-600/80" />
            </WorkflowGroup>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
        <div className="absolute bottom-6 right-6 flex gap-3">
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs opacity-50">+</div>
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs opacity-50">?</div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs shadow-lg">▶</div>
        </div>
      </div>
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -10; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
