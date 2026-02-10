
import React from 'react';

const WhyN8N: React.FC = () => {
  const perks = [
    { title: "Liberdade Total", text: "Fair-code. Sem travas de fornecedor.", icon: "🔓" },
    { title: "Segurança", text: "Controle absoluto sobre seus dados.", icon: "🛡️" },
    { title: "Escalabilidade", text: "Feito para lidar com milhões de dados.", icon: "📈" },
    { title: "Economia", text: "Até 10x mais barato que Zapier/Make.", icon: "💎" }
  ];

  return (
    <section id="n8n" className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass p-10 md:p-20 rounded-[3.5rem] border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Por que o <span className="text-blue-500">n8n</span> é a nossa escolha?
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Diferente de ferramentas engessadas, o n8n nos permite criar o impossível. Se o seu negócio tem um processo único, nós criamos uma automação única.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {perks.map((p, i) => (
                <div key={i} className="space-y-2 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all">
                  <div className="text-2xl">{p.icon}</div>
                  <div className="font-bold text-white text-sm">{p.title}</div>
                  <div className="text-[11px] text-gray-500">{p.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative font-mono text-sm">
            <div className="glass bg-zinc-950 p-6 rounded-3xl border-white/10 shadow-inner">
              <div className="flex gap-2 mb-6 opacity-30">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <p className="text-blue-400">const <span className="text-white">business</span> = <span className="text-orange-300">"YourCompany"</span>;</p>
                <p className="text-blue-400">const <span className="text-white">workflow</span> = <span className="text-indigo-400">n8n</span>.<span className="text-blue-300">create</span>({`{`}</p>
                <p className="pl-4 text-gray-400">trigger: <span className="text-orange-300">"NewOrder"</span>,</p>
                <p className="pl-4 text-gray-400">processor: <span className="text-orange-300">"AI_Agent"</span>,</p>
                <p className="pl-4 text-gray-400">output: [<span className="text-orange-300">"WhatsApp"</span>, <span className="text-orange-300">"CRM"</span>]</p>
                <p className="text-blue-400">{`}`});</p>
                <p className="mt-4 text-green-500 animate-pulse">// Workflow optimized for 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyN8N;
