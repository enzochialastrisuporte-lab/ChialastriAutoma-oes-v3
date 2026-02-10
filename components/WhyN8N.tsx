
import React, { useState } from 'react';

const WhyN8N: React.FC = () => {
  const [hoverNode, setHoverNode] = useState<string | null>(null);

  const reasons = [
    {
      title: "Integrações Avançadas",
      desc: "Conecte qualquer API ou serviço com facilidade, sem limitações técnicas."
    },
    {
      title: "Segurança de Dados",
      desc: "Automações que respeitam a privacidade, com controle total sobre onde seus dados rodam."
    },
    {
      title: "Escalabilidade Infinita",
      desc: "De pequenas tarefas a fluxos complexos com milhares de execuções simultâneas."
    },
    {
      title: "Custo-Benefício",
      desc: "Alternativa poderosa ao Zapier e Make, permitindo automações robustas por uma fração do preço."
    }
  ];

  return (
    <section id="n8n" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Por que usamos <span className="text-blue-500 underline underline-offset-8">n8n</span>?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            A liberdade que sua empresa precisa. O n8n é a plataforma "fair-code" que permite criar integrações complexas que outras ferramentas simplesmente não alcançam.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-white/5 bg-white/5 hover:border-blue-500/30 transition-all">
                <h4 className="font-bold text-white mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-sm">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-full">
           {/* Detailed n8n flow representation inspired by the photo */}
           <div className="relative glass p-6 rounded-3xl border-white/10 shadow-2xl overflow-hidden min-h-[400px]">
             <div className="absolute top-0 left-0 w-full h-full bg-[#0d1117] opacity-60 z-0"></div>
             
             <div className="relative z-10 space-y-8">
               <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 mb-4 border-b border-white/5 pb-2">
                 <span>CANVAS: PROD_WORKFLOW</span>
                 <span className="text-green-500">● LIVE</span>
               </div>

               {/* Central Cluster */}
               <div className="flex flex-col items-center gap-4">
                 <div 
                   onMouseEnter={() => setHoverNode('trigger')}
                   className={`p-3 rounded-lg border ${hoverNode === 'trigger' ? 'border-blue-500 bg-blue-500/20' : 'border-white/10 bg-white/5'} transition-all cursor-help`}
                 >
                   <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-lg font-bold">W</div>
                 </div>
                 
                 <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
                 
                 <div className="flex gap-4">
                    {[1, 2, 3].map(i => (
                      <div 
                        key={i}
                        onMouseEnter={() => setHoverNode(`node-${i}`)}
                        className={`w-12 h-12 rounded border ${hoverNode === `node-${i}` ? 'border-orange-500 bg-orange-500/20' : 'border-white/10 bg-white/5'} transition-all flex items-center justify-center font-mono text-xs cursor-help`}
                      >
                        N{i}
                      </div>
                    ))}
                 </div>

                 <div className="w-48 h-px bg-white/10 relative">
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
                 </div>

                 <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="p-3 border border-red-500/30 bg-red-500/5 rounded-lg text-[10px] font-mono">
                       <span className="text-red-400 block mb-1">Error Path</span>
                       Log to Database
                    </div>
                    <div className="p-3 border border-green-500/30 bg-green-500/5 rounded-lg text-[10px] font-mono">
                       <span className="text-green-400 block mb-1">Success Path</span>
                       Send Customer Notification
                    </div>
                 </div>
               </div>
             </div>

             {/* Node info popup */}
             {hoverNode && (
               <div className="absolute bottom-4 right-4 p-3 bg-slate-900 border border-blue-500/50 rounded-lg shadow-2xl animate-in fade-in zoom-in duration-200 z-20">
                 <p className="text-[10px] font-mono text-blue-400 uppercase tracking-tighter">Node Info</p>
                 <p className="text-xs text-gray-200">Execution time: 42ms</p>
                 <p className="text-xs text-gray-200">Output: JSON Object</p>
               </div>
             )}

             <div className="absolute inset-0 pointer-events-none border-[12px] border-transparent outline outline-1 outline-white/5 rounded-3xl"></div>
           </div>
           
           <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full"></div>
           <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 blur-[80px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyN8N;
