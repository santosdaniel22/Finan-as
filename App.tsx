
import React, { useState, useEffect } from 'react';
import { AppView, DiagnosticResult } from './types';
import Header from './components/Header';
import DiagnosticFunnel from './components/DiagnosticFunnel';
import ResultPage from './components/ResultPage';
import SalesPage from './components/SalesPage';
import { AnimatePresence, motion } from 'framer-motion';

declare global {
  interface Window {
    fbq: any;
  }
}

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.FUNNEL);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  
  // Quiz state managed here to persist between view changes
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; value: number }[]>([]);

  // Scroll to top and track PageView on view change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [view]);

  const handleDiagnosticComplete = (res: DiagnosticResult) => {
    setResult(res);
    setView(AppView.RESULT);
    
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', { content_name: 'Diagnóstico Financeiro' });
    }
  };

  const handleContinueToSales = () => {
    setView(AppView.SALES_PAGE);
    
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'ViewContent', { 
        content_name: 'Página de Vendas MY Finance',
        content_category: 'Digital Product'
      });
    }
  };

  const handleBackToQuiz = () => {
    setView(AppView.FUNNEL);
  };

  const handleResetQuiz = () => {
    setAnswers([]);
    setCurrentStep(0);
    setResult(null);
    setView(AppView.FUNNEL);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900 bg-white">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {view === AppView.FUNNEL && (
            <motion.div 
              key="funnel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gradient-to-b from-slate-50 to-white pt-10 pb-20"
            >
              <div className="max-w-4xl mx-auto px-4 text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                  Análise de Gestão Financeira
                </h1>
                <p className="text-slate-500 max-w-xl mx-auto">
                  Identifique os gargalos da sua organização e veja como a planilha correta pode automatizar seu controle.
                </p>
              </div>
              <DiagnosticFunnel 
                onComplete={handleDiagnosticComplete} 
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                answers={answers}
                setAnswers={setAnswers}
                onReset={handleResetQuiz}
              />
            </motion.div>
          )}

          {view === AppView.RESULT && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ResultPage 
                result={result} 
                onContinue={handleContinueToSales} 
                onBack={handleBackToQuiz}
              />
            </motion.div>
          )}

          {view === AppView.SALES_PAGE && (
            <motion.div
              key="sales"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <SalesPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Badge */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-3 bg-white/90 backdrop-blur border border-slate-100 p-3 rounded-2xl shadow-xl"
      >
         <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">
           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path></svg>
         </div>
         <div className="text-xs">
           <p className="font-bold text-slate-900">Ricardo acaba de baixar</p>
           <p className="text-slate-400">Planilha MY Finance</p>
         </div>
      </motion.div>
    </div>
  );
};

export default App;
