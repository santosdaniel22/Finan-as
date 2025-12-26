
import React from 'react';
import { SpreadsheetInfo } from '../types';

interface SpreadsheetDetailProps {
  data: SpreadsheetInfo;
}

const SpreadsheetDetail: React.FC<SpreadsheetDetailProps> = ({ data }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 p-8 rounded-3xl hover:bg-slate-700/50 transition-all group">
      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
      </div>
      <h3 className="text-xl font-bold mb-3">{data.name}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{data.objective}</p>
      
      <div className="space-y-4 pt-6 border-t border-slate-700">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-2">Estrutura Principal</span>
          <div className="flex flex-wrap gap-2">
            {data.columns.slice(0, 3).map((col, i) => (
              <span key={i} className="text-xs bg-slate-900 px-2 py-1 rounded border border-slate-700">{col}</span>
            ))}
            <span className="text-xs text-slate-500">...</span>
          </div>
        </div>
        <div>
          <span className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-widest block mb-2">Benefício Prático</span>
          <p className="text-xs text-slate-300 italic">"{data.benefit}"</p>
        </div>
      </div>
    </div>
  );
};

export default SpreadsheetDetail;
