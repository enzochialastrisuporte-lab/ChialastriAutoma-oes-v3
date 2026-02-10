
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Menos tarefas manuais",
      desc: "Elimine o 'copy-paste' da sua vida e da sua equipe.",
      icon: "⚡"
    },
    {
      title: "Mais tempo estratégico",
      desc: "Foque em fechar negócios, não em organizar planilhas.",
      icon: "⏳"
    },
    {
      title: "Atendimento 24/7",
      desc: "Sua empresa nunca dorme. Responda leads em segundos.",
      icon: "🌙"
    },
    {
      title: "Soluções Escaláveis",
      desc: "Cresça sem precisar contratar mais pessoas para burocracia.",
      icon: "📈"
    }
  ];

  return (
    <section className="py-24 px-6 bg-blue-600/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Transformação Real</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group p-8 rounded-3xl bg-gray-900/50 border border-white/5 hover:border-blue-500/50 transition-all text-center">
              <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-300 inline-block">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
