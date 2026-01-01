
import React from 'react';
import { QUESTIONS } from '../constants';
import { DiagnosticResult } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DiagnosticFunnelProps {
  onComplete: (result: DiagnosticResult) => void;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  answers: { questionId: number; value: number }[];
  setAnswers: React.Dispatch<React.SetStateAction<{ questionId: number; value: number }[]>>;
  onReset: () => void;
}

const DiagnosticFunnel: React.FC<DiagnosticFunnelProps> = ({ 
  onComplete, 
  currentStep, 
  setCurrentStep, 
  answers, 
  setAnswers,
  onReset
}) => {
  const handleOptionSelect = (value: number) => {
    const newAnswer = { questionId: QUESTIONS[currentStep].id, value };
    const updatedAnswers = [...answers];
    
    // Check if we already answered this step (if we went back)
    if (updatedAnswers[currentStep]) {
      updatedAnswers[currentStep] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }
    
    setAnswers(updatedAnswers);
    
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      processResult(updatedAnswers);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Fixed error: Completed the processResult logic and ensured it returns a valid DiagnosticResult with the 'recommendation' property.
  const processResult = (finalAnswers: { questionId: number; value: number }[]) => {
    const findAnswer = (id: number) => finalAnswers.find(a => a.questionId === id)?.value || 0;
    const totalScore = finalAnswers.reduce((acc, curr) => acc + curr.value, 0);

    const hasDebtIssue = findAnswer(5) === 1;

    let result: DiagnosticResult;

    if (hasDebtIssue || totalScore <= 15) {
      result = {
        level: 1,
        title: "Perfil: Recuperação de Fluxo",
        description: "Seu maior gargalo hoje são os compromissos passados que travam seu presente. Você precisa de um sistema que dê clareza sobre o que é essencial para limpar o caminho.",
        recommendation: "Foco total na Aba 7 (Dívidas) e Aba 4 (Variáveis) para estancar a sangria financeira."
      };
    } else if (totalScore < 25) {
      result = {
        level: 2,
        title: "Perfil: Alocação Estratégica",
        description: "Você já tem controle, mas falta otimização. O dinheiro entra e sai, mas você sente que poderia estar rendendo mais ou sendo melhor aproveitado.",
        recommendation: "Utilizar a Aba 6 (Orçamento) e Aba 9 (Metas) para direcionar cada real para um objetivo claro."
      };
    } else {
      result = {
        level: 3,
        title: "Perfil: Inteligência Financeira",
        description: "Você está no caminho certo para a liberdade. Sua necessidade agora é de dashboards profissionais que consolidem sua evolução e automatizem os checklists.",
        recommendation: "Explorar ao máximo a Aba 10 (Dashboard) e Aba 1 (Mensal Geral) para manter a performance."
      };
    }

    onComplete(result);
  };

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  // Fixed: Added the missing JSX return statement for the component.
  return (
    <div className="max-w-2xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-10">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Passo {currentStep + 1} de {QUESTIONS.length}</span>
          <span className="text-sm font-bold text-slate-400">{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
            {currentQuestion.text}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(option.value)}
                className="w-full text-left p-5 rounded-2xl border-2 border-slate-50 hover:border-emerald-500 hover:bg-emerald-50 transition-all group relative"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:border-emerald-500 group-hover:text-emerald-500 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </div>
                  <span className="text-slate-700 font-medium text-lg">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-slate-50 flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={cn(
                "flex items-center gap-2 text-sm font-bold transition-colors",
                currentStep === 0 ? "text-slate-200 cursor-not-allowed" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <ArrowLeft className="w-4 h-4" /> Voltar
            </button>
            
            <button
              onClick={onReset}
              className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-rose-400 transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Reiniciar Teste
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Fixed error: Added the missing default export for DiagnosticFunnel.
export default DiagnosticFunnel;
