
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiConsultant: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const analyzeAutomation = async () => {
    if (!businessType || loading) return;
    setLoading(true);
    setResult(null);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eu tenho um negócio de ${businessType}. Liste 3 processos específicos que o especialista Enzo Chialastri pode automatizar usando n8n para economizar pelo menos 10 horas por semana. Seja curto, direto e persuasivo. Mencione o nome do Enzo.`,
        config: {
            temperature: 0.7,
        }
      });
      
      const generatedText = response.text;
      setResult(generatedText || "Não foi possível gerar a análise no momento. Por favor, tente descrever seu negócio de outra forma.");
    } catch (error) {
      console.error("Erro na API Gemini:", error);
      setResult("Desculpe, ocorreu um erro ao consultar a inteligência do Enzo. Clique no botão do WhatsApp para falar diretamente com ele!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] border-blue-500/20 shadow-2xl shadow-blue-500/5">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase">
              Consultoria Especializada via IA
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">O que o Enzo faria por você?</h2>
          <p className="text-gray-400">Digite seu ramo de atividade e receba uma análise de automação personalizada instantaneamente.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input 
            type="text" 
            placeholder="Ex: Imobiliária, E-commerce, Clínica Médica..."
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && analyzeAutomation()}
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 transition-colors text-white"
          />
          <button 
            onClick={analyzeAutomation}
            disabled={loading}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center min-w-[220px]"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analisando...
              </>
            ) : 'Consultar Especialista'}
          </button>
        </div>

        {result && (
          <div className="p-6 rounded-2xl bg-white/5 border border-blue-500/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">🤖</div>
              <div className="text-gray-300 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
                {result}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeminiConsultant;
