
import React from 'react';
import { DiagnosticResult } from '../types';

interface ResultPageProps {
  result: DiagnosticResult;
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ result, onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      <div className="bg-emerald-600 text-white rounded-3xl p-12 shadow-2xl shadow-emerald-200 mb-8">
        <div className="inline-block px-4 py-1 bg-emerald-500/30 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-400/30">
          Diagnóstico Concluído
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          {result.title}
        </h1>
        <p className="text-lg md:text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
          {result.description}
        </p>
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-block text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200 mb-2">A Solução Ideal para Você:</p>
          <p className="text-white text-lg italic">"{result.recommendation}"</p>
        </div>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        <p className="text-slate-600 text-lg">
          O sistema de planilhas <strong>MY Finance</strong> foi projetado exatamente para automatizar essa alocação de recursos que você precisa hoje.
        </p>
        <button
          onClick={onContinue}
          className="w-full bg-slate-900 text-white py-6 rounded-2xl text-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl active:scale-95"
        >
          Acessar minha planilha personalizada →
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
