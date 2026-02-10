
import React, { useState } from 'react';
import { PUZZLE_ITEMS } from '../constants';

const InteractivePuzzle: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <section id="solucoes" className="py-24 px-6 bg-gradient-to-b from-transparent to-blue-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">A Peça que Faltava</h2>
          <p className="text-gray-400">Explore como cada módulo resolve um gargalo real do seu negócio.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PUZZLE_ITEMS.map((item, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              className={`
                relative p-8 rounded-3xl glass transition-all duration-700 cursor-pointer overflow-hidden
                ${activeItem === index ? 'w-80 h-96 scale-105 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'w-64 h-64 border-white/5 opacity-80'}
                flex flex-col items-center justify-center text-center group
              `}
            >
              <div className={`
                text-5xl mb-4 transition-all duration-500
                ${activeItem === index ? 'scale-125 -translate-y-4' : 'group-hover:scale-110'}
              `}>
                {item.icon}
              </div>
              
              <h3 className={`font-bold mb-3 transition-all duration-500 ${activeItem === index ? 'text-2xl text-blue-400' : 'text-xl'}`}>
                {item.title}
              </h3>
              
              <div className={`
                transition-all duration-500 ease-out
                ${activeItem === index ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'}
              `}>
                <p className="text-gray-400 text-sm mb-4">
                  {item.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                  <span className="animate-pulse">●</span> Fluxo Ativo
                </div>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
              
              {/* Fake Progress Bar on active */}
              {activeItem === index && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                  <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { width: 0%; left: 0; }
          50% { width: 100%; left: 0; }
          100% { width: 0%; left: 100%; }
        }
      `}</style>
    </section>
  );
};

export default InteractivePuzzle;
