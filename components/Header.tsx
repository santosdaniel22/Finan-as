
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-emerald-200">
          MY
        </div>
        <span className="font-bold text-slate-800 text-lg tracking-tight uppercase">MY Finance</span>
      </div>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
        <a href="#solucao" className="hover:text-emerald-600 transition-colors">A Solução</a>
        <a href="#beneficios" className="hover:text-emerald-600 transition-colors">Benefícios</a>
        <a href="#oferta" className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-md">Começar Agora</a>
      </nav>
    </header>
  );
};

export default Header;
