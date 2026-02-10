
import React, { useState } from 'react';
import { PUZZLE_ITEMS } from '../constants';

const InteractivePuzzle: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="solucoes" className="py-32 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            A Peça que Faltava para o seu <br className="hidden md:block"/> <span className="text-blue-500">Crescimento Exponencial</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nossas automações funcionam como um quebra-cabeça perfeito: cada módulo se encaixa na sua dor para gerar lucro.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {PUZZLE_ITEMS.map((item, index) => (
            <div 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`
                relative w-72 h-72 md:w-80 md:h-80 rounded-[3rem] glass flex flex-col items-center justify-center p-8 text-center transition-all duration-500 cursor-default
                ${index % 2 === 0 ? 'animate-puzzle-piece' : 'animate-puzzle-piece-delayed'}
                ${hoveredIndex === index ? 'scale-105 border-blue-500/40 shadow-2xl shadow-blue-500/10' : 'opacity-80'}
              `}
            >
              <div className={`
                absolute inset-0 rounded-[3rem] bg-gradient-to-br ${item.color} opacity-20 transition-opacity duration-500
                ${hoveredIndex === index ? 'opacity-40' : 'opacity-10'}
              `}></div>

              <div className="relative z-10">
                <div className={`text-6xl mb-6 transition-transform duration-500 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                
                <div className={`
                  overflow-hidden transition-all duration-500 
                  ${hoveredIndex === index ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                `}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {!hoveredIndex && (
                   <div className="mt-4 text-xs font-bold text-blue-500/50 uppercase tracking-widest animate-pulse">
                     Toque para ver
                   </div>
                )}
              </div>

              {/* Connector lines (decorative) */}
              <div className="absolute -z-10 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent top-1/2 -left-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractivePuzzle;
