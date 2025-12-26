
import React, { useState } from 'react';
import { QUESTIONS } from '../constants';
import { DiagnosticResult } from '../types';

interface DiagnosticFunnelProps {
  onComplete: (result: DiagnosticResult) => void;
}

const DiagnosticFunnel: React.FC<DiagnosticFunnelProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; value: number }[]>([]);

  const handleOptionSelect = (value: number) => {
    const newAnswers = [...answers, { questionId: QUESTIONS[currentStep].id, value }];
    
    if (currentStep < QUESTIONS.length - 1) {
      setAnswers(newAnswers);
      setCurrentStep(currentStep + 1);
    } else {
      processResult(newAnswers);
    }
  };

  const processResult = (finalAnswers: { questionId: number; value: number }[]) => {
    const findAnswer = (id: number) => finalAnswers.find(a => a.questionId === id)?.value || 0;
    const totalScore = finalAnswers.reduce((acc, curr) => acc + curr.value, 0);

    // Lógica de Identificação de Perfil
    const hasDebtIssue = findAnswer(5) === 1; // Resposta 1: Dívidas comprometem
    const hasClarityIssue = findAnswer(1) === 1 || findAnswer(3) === 1; // Medo do extrato ou não sabe quanto gasta
    const hasCardIssue = findAnswer(4) === 1; // Perda de controle no cartão
    const isVariableIncome = findAnswer(2) === 1; // Renda variável

    let result: DiagnosticResult;

    if (hasDebtIssue) {
      result = {
        level: 1,
        title: "Perfil: Recuperação de Fluxo",
        description: "Seu maior gargalo hoje são os parcelamentos acumulados que drenam sua liberdade antes mesmo do mês começar.",
        recommendation: "Você precisa urgentemente da Aba de 'Controle de Dívidas' e 'Planejamento de Orçamento' para estancar a sangria financeira e retomar o oxigênio do seu salário."
      };
    } else if (hasCardIssue) {
      result = {
        level: 2,
        title: "Perfil: Alerta de Crédito",
        description: "Você tem renda, mas o cartão de crédito se tornou uma 'extensão' perigosa do seu salário, ocultando seus gastos reais.",
        recommendation: "A Aba de 'Controle de Cartão de Crédito' do MY Finance será seu braço direito para antecipar faturas e visualizar o limite real disponível sem sustos."
      };
    } else if (hasClarityIssue) {
      result = {
        level: 1,
        title: "Perfil: Névoa Financeira",
        description: "Você vive um estado de incerteza. O dinheiro entra e sai sem que você consiga rastrear o destino final de cada real.",
        recommendation: "O 'Resumo Financeiro Visual' e a 'Alocação de Despesas Variáveis' trarão a clareza que falta para você decidir para onde o dinheiro deve ir."
      };
    } else if (isVariableIncome && totalScore < 25) {
      result = {
        level: 2,
        title: "Perfil: Instabilidade Estrutural",
        description: "Sua renda variável exige um controle rígido que você ainda não possui, gerando insegurança nos meses de baixa.",
        recommendation: "Use o 'Controle de Receitas' para mapear suas médias e a 'Reserva de Metas' para criar seu colchão de segurança automático."
      };
    } else {
      // Perfil mais organizado
      result = {
        level: 3,
        title: "Perfil: Pronto para a Liberdade",
        description: "Você já tem bons hábitos, mas falta uma ferramenta profissional para escalar sua organização e começar a focar em metas maiores.",
        recommendation: "Sua solução é o 'Dashboard de Metas' e o 'Resumo 360' para otimizar aportes e visualizar sua independência financeira chegando mais rápido."
      };
    }

    onComplete(result);
  };

  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;
  const currentQuestion = QUESTIONS[currentStep];

  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
          <span>Pergunta {currentStep + 1} de {QUESTIONS.length}</span>
          <span>{Math.round(progress)}% Concluído</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-10 leading-tight">
          {currentQuestion.text}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(option.value)}
              className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group flex items-center justify-between"
            >
              <span className="text-lg font-medium text-slate-600 group-hover:text-emerald-700">
                {option.label}
              </span>
              <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-emerald-500 flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 flex justify-center gap-8 text-slate-400 opacity-60">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
          Seguro & Privado
        </div>
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
          Análise Instantânea
        </div>
      </div>
    </div>
  );
};

export default DiagnosticFunnel;
