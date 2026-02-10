
import React, { useState } from 'react';
import { PUZZLE_ITEMS } from '../constants';

const InteractivePuzzle: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="solucoes" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-3xl md:text-6xl font-black text-white leading-tight">
            As peças certas para o seu <br/> <span className="text-blue-600">quebra-cabeça digital.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nossas soluções se conectam perfeitamente para eliminar gargalos e criar fluxos de trabalho que escalam sozinhos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10 items-start">
          {PUZZLE_ITEMS.map((item, index) => (
            <div 
              key={index}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className={`
                relative w-72 h-72 md:w-80 md:h-80 rounded-[4rem] glass-card p-10 flex flex-col items-center justify-center text-center cursor-pointer group
                ${index % 2 === 0 ? 'balloon-animation' : 'balloon-animation-slow'}
                ${active === index ? 'scale-110 z-20 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'opacity-80 z-10'}
              `}
            >
              <div className={`absolute inset-0 rounded-[4rem] bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              <div className={`
                overflow-hidden transition-all duration-500
                ${active === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
              `}>
                <p className="text-sm text-gray-400 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {!active && (
                <div className="mt-4 text-[10px] font-bold text-blue-500/40 uppercase tracking-widest animate-pulse">
                  Conhecer
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractivePuzzle;
