
import React from 'react';

const Infrastructure: React.FC = () => {
  const specs = [
    {
      title: "VPS Dedicada",
      desc: "Sua automação não é compartilhada. Instâncias exclusivas para máximo sigilo e performance.",
      icon: "🛡️",
      status: "Privado"
    },
    {
      title: "Firewall Ativo",
      desc: "Proteção contra ataques externos e monitoramento de rede em tempo real.",
      icon: "🧱",
      status: "Protegido"
    },
    {
      title: "Isolamento de Dados",
      desc: "Ambientes Docker isolados dentro da VPS com todas as seguranças possíveis aplicadas.",
      icon: "🔐",
      status: "Seguro"
    },
    {
      title: "Backup & Criptografia",
      desc: "Criptografia de ponta a ponta e backups redundantes para sua tranquilidade total.",
      icon: "💾",
      status: "Backup ON"
    }
  ];

  return (
    <section id="hospedagem" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-30"></div>
            <div className="relative glass border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-widest">
                  VPS SECURITY: MAXIMUM
                </div>
              </div>

              <div className="space-y-6">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all group">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{spec.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white">{spec.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-tight">{spec.desc}</p>
                    </div>
                    <div className="text-[9px] font-mono px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {spec.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                <span>VPS ENCRYPTION: AES-256</span>
                <span>SECURITY PROTOCOL: v3.1</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
              Segurança de Nível Bancário
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Sua automação em uma <span className="text-blue-500">VPS dedicada com segurança total.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Não comprometemos a integridade do seu negócio. Suas automações n8n ficam hospedadas em uma <strong>VPS privada e exclusiva</strong>, configurada com todas as camadas de segurança possíveis para garantir que seus dados e processos estejam sempre blindados.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">✓</div>
                Acesso restrito e criptografado via SSH Keys
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">✓</div>
                Isolamento total de processos em containers seguros
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400 font-bold">✓</div>
                Proteção robusta contra acessos não autorizados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
